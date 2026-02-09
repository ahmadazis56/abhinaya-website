<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) {
    header('Location: login.php');
    exit();
}

require_once '../backend/config/database.php';
$database = new Database();
$db = $database->getConnection();

$message = '';
$action = isset($_GET['action']) ? $_GET['action'] : 'list';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'create') {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $date = $_POST['date'];
    
    // Handle image upload
    $image = '';
    if (isset($_FILES['image']) && $_FILES['image']['error'] === 0) {
        $upload_dir = '../uploads/events/';
        if (!file_exists($upload_dir)) {
            mkdir($upload_dir, 0777, true);
        }
        
        $filename = time() . '_' . basename($_FILES['image']['name']);
        $target_file = $upload_dir . $filename;
        
        if (move_uploaded_file($_FILES['image']['tmp_name'], $target_file)) {
            $image = 'uploads/events/' . $filename;
        }
    }
    
    $query = "INSERT INTO events (title, description, event_date, image) 
              VALUES (:title, :description, :event_date, :image)";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':event_date', $date);
    $stmt->bindParam(':image', $image);
    
    if ($stmt->execute()) {
        $message = "Event created successfully!";
        $action = 'list';
    } else {
        $message = "Failed to create event.";
    }
}

if ($action === 'delete' && isset($_GET['id'])) {
    $id = $_GET['id'];
    
    // Get image path to delete file
    $query = "SELECT image FROM events WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $event = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($event && $event['image']) {
        if (file_exists('../' . $event['image'])) {
            unlink('../' . $event['image']);
        }
    }
    
    $query = "DELETE FROM events WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $id);
    
    if ($stmt->execute()) {
        $message = "Event deleted successfully!";
    }
}

// Get events for list view
$events = [];
if ($action === 'list') {
    $query = "SELECT * FROM events ORDER BY created_at DESC";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $events = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Events - Abhinaya Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .sidebar {
            background: #2c3e50;
            min-height: 100vh;
            color: white;
        }
        .sidebar .nav-link {
            color: #ecf0f1;
            padding: 15px 20px;
            border-radius: 5px;
            margin: 5px 0;
        }
        .sidebar .nav-link:hover {
            background: #34495e;
            color: white;
        }
        .sidebar .nav-link.active {
            background: #3498db;
        }
        .main-content {
            background: #f8f9fa;
            min-height: 100vh;
        }
        .event-card {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        .event-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <div class="col-md-2 sidebar p-0">
                <div class="p-3">
                    <h4 class="text-center mb-4">Abhinaya Admin</h4>
                    <nav class="nav flex-column">
                        <a href="dashboard.php" class="nav-link">
                            <i class="fas fa-tachometer-alt me-2"></i> Dashboard
                        </a>
                        <a href="manage-events.php" class="nav-link active">
                            <i class="fas fa-calendar me-2"></i> Events
                        </a>
                        <a href="manage-gallery.php" class="nav-link">
                            <i class="fas fa-images me-2"></i> Gallery
                        </a>
                        <a href="manage-flyers.php" class="nav-link">
                            <i class="fas fa-file-image me-2"></i> Flyers
                        </a>
                        <a href="logout.php" class="nav-link text-danger">
                            <i class="fas fa-sign-out-alt me-2"></i> Logout
                        </a>
                    </nav>
                </div>
            </div>
            
            <!-- Main Content -->
            <div class="col-md-10 main-content">
                <div class="p-4">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h2>Manage Events</h2>
                        <a href="?action=create" class="btn btn-primary">
                            <i class="fas fa-plus me-2"></i> Add New Event
                        </a>
                    </div>
                    
                    <?php if ($message): ?>
                        <div class="alert alert-success"><?php echo $message; ?></div>
                    <?php endif; ?>
                    
                    <?php if ($action === 'create'): ?>
                        <!-- Create Event Form -->
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Create New Event</h5>
                                <form method="POST" enctype="multipart/form-data">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="title" class="form-label">Event Title</label>
                                                <input type="text" class="form-control" id="title" name="title" required>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="date" class="form-label">Event Date</label>
                                                <input type="datetime-local" class="form-control" id="date" name="date" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="description" class="form-label">Description</label>
                                        <textarea class="form-control" id="description" name="description" rows="4"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="image" class="form-label">Event Image</label>
                                        <input type="file" class="form-control" id="image" name="image" accept="image/*" required>
                                    </div>
                                    <button type="submit" class="btn btn-success">
                                        <i class="fas fa-save me-2"></i> Create Event
                                    </button>
                                    <a href="manage-events.php" class="btn btn-secondary">Cancel</a>
                                </form>
                            </div>
                        </div>
                    <?php else: ?>
                        <!-- Events List -->
                        <div class="row">
                            <?php foreach ($events as $event): ?>
                                <div class="col-md-4">
                                    <div class="event-card">
                                        <?php if ($event['image']): ?>
                                            <img src="../<?php echo $event['image']; ?>" class="event-image" alt="<?php echo $event['title']; ?>">
                                        <?php endif; ?>
                                        <h5 class="mt-3"><?php echo htmlspecialchars($event['title']); ?></h5>
                                        <p class="text-muted small">
                                            <i class="fas fa-calendar me-2"></i>
                                            <?php echo date('M d, Y', strtotime($event['event_date'])); ?>
                                        </p>
                                        <p><?php echo substr(htmlspecialchars($event['description']), 0, 100); ?>...</p>
                                        <div class="d-flex justify-content-between">
                                            <a href="?action=edit&id=<?php echo $event['id']; ?>" class="btn btn-sm btn-outline-primary">
                                                <i class="fas fa-edit"></i> Edit
                                            </a>
                                            <a href="?action=delete&id=<?php echo $event['id']; ?>" 
                                               class="btn btn-sm btn-outline-danger" 
                                               onclick="return confirm('Are you sure?')">
                                                <i class="fas fa-trash"></i> Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

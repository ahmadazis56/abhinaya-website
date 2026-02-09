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
    $category = $_POST['category'];
    
    // Handle image upload
    $image = '';
    if (isset($_FILES['image']) && $_FILES['image']['error'] === 0) {
        $upload_dir = '../uploads/gallery/';
        if (!file_exists($upload_dir)) {
            mkdir($upload_dir, 0777, true);
        }
        
        $filename = time() . '_' . basename($_FILES['image']['name']);
        $target_file = $upload_dir . $filename;
        
        if (move_uploaded_file($_FILES['image']['tmp_name'], $target_file)) {
            $image = 'uploads/gallery/' . $filename;
        }
    }
    
    $query = "INSERT INTO gallery (title, description, category, image) 
              VALUES (:title, :description, :category, :image)";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':category', $category);
    $stmt->bindParam(':image', $image);
    
    if ($stmt->execute()) {
        $message = "Gallery item created successfully!";
        $action = 'list';
    } else {
        $message = "Failed to create gallery item.";
    }
}

if ($action === 'delete' && isset($_GET['id'])) {
    $id = $_GET['id'];
    
    // Get image path to delete file
    $query = "SELECT image FROM gallery WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $gallery = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($gallery && $gallery['image']) {
        if (file_exists('../' . $gallery['image'])) {
            unlink('../' . $gallery['image']);
        }
    }
    
    $query = "DELETE FROM gallery WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $id);
    
    if ($stmt->execute()) {
        $message = "Gallery item deleted successfully!";
    }
}

// Get gallery items for list view
$gallery_items = [];
if ($action === 'list') {
    $query = "SELECT * FROM gallery ORDER BY created_at DESC";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $gallery_items = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Gallery - Abhinaya Admin</title>
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
        .gallery-card {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        .gallery-image {
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
                        <a href="manage-events.php" class="nav-link">
                            <i class="fas fa-calendar me-2"></i> Events
                        </a>
                        <a href="manage-gallery.php" class="nav-link active">
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
                        <h2>Manage Gallery</h2>
                        <a href="?action=create" class="btn btn-success">
                            <i class="fas fa-plus me-2"></i> Add Gallery Item
                        </a>
                    </div>
                    
                    <?php if ($message): ?>
                        <div class="alert alert-success"><?php echo $message; ?></div>
                    <?php endif; ?>
                    
                    <?php if ($action === 'create'): ?>
                        <!-- Create Gallery Form -->
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Add Gallery Item</h5>
                                <form method="POST" enctype="multipart/form-data">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="title" class="form-label">Title</label>
                                                <input type="text" class="form-control" id="title" name="title" required>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="category" class="form-label">Category</label>
                                                <select class="form-control" id="category" name="category">
                                                    <option value="creative">Creative</option>
                                                    <option value="publisher">Publisher</option>
                                                    <option value="techno">Techno</option>
                                                    <option value="events">Events</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="description" class="form-label">Description</label>
                                        <textarea class="form-control" id="description" name="description" rows="4"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="image" class="form-label">Image</label>
                                        <input type="file" class="form-control" id="image" name="image" accept="image/*" required>
                                    </div>
                                    <button type="submit" class="btn btn-success">
                                        <i class="fas fa-save me-2"></i> Add Gallery Item
                                    </button>
                                    <a href="manage-gallery.php" class="btn btn-secondary">Cancel</a>
                                </form>
                            </div>
                        </div>
                    <?php else: ?>
                        <!-- Gallery List -->
                        <div class="row">
                            <?php foreach ($gallery_items as $item): ?>
                                <div class="col-md-4">
                                    <div class="gallery-card">
                                        <?php if ($item['image']): ?>
                                            <img src="../<?php echo $item['image']; ?>" class="gallery-image" alt="<?php echo $item['title']; ?>">
                                        <?php endif; ?>
                                        <h5 class="mt-3"><?php echo htmlspecialchars($item['title']); ?></h5>
                                        <p class="text-muted small">
                                            <i class="fas fa-tag me-2"></i>
                                            <?php echo ucfirst($item['category']); ?>
                                        </p>
                                        <p><?php echo substr(htmlspecialchars($item['description']), 0, 100); ?>...</p>
                                        <div class="d-flex justify-content-between">
                                            <a href="?action=edit&id=<?php echo $item['id']; ?>" class="btn btn-sm btn-outline-primary">
                                                <i class="fas fa-edit"></i> Edit
                                            </a>
                                            <a href="?action=delete&id=<?php echo $item['id']; ?>" 
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

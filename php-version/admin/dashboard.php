<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) {
    header('Location: login.php');
    exit();
}

require_once '../backend/config/database.php';
$database = new Database();
$db = $database->getConnection();

// Get counts
$events_count = $db->query("SELECT COUNT(*) as count FROM events")->fetch(PDO::FETCH_ASSOC)['count'];
$gallery_count = $db->query("SELECT COUNT(*) as count FROM gallery")->fetch(PDO::FETCH_ASSOC)['count'];
$flyers_count = $db->query("SELECT COUNT(*) as count FROM flyers")->fetch(PDO::FETCH_ASSOC)['count'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Abhinaya</title>
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
        .stat-card {
            background: white;
            border-radius: 10px;
            padding: 25px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        .stat-card:hover {
            transform: translateY(-5px);
        }
        .stat-icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
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
                        <a href="dashboard.php" class="nav-link active">
                            <i class="fas fa-tachometer-alt me-2"></i> Dashboard
                        </a>
                        <a href="manage-events.php" class="nav-link">
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
                        <h2>Dashboard</h2>
                        <div>
                            <span class="badge bg-success">Welcome, <?php echo $_SESSION['admin_user']; ?></span>
                        </div>
                    </div>
                    
                    <!-- Statistics Cards -->
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="stat-card text-center">
                                <div class="stat-icon text-primary">
                                    <i class="fas fa-calendar"></i>
                                </div>
                                <h3><?php echo $events_count; ?></h3>
                                <p class="text-muted">Total Events</p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="stat-card text-center">
                                <div class="stat-icon text-success">
                                    <i class="fas fa-images"></i>
                                </div>
                                <h3><?php echo $gallery_count; ?></h3>
                                <p class="text-muted">Gallery Items</p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="stat-card text-center">
                                <div class="stat-icon text-warning">
                                    <i class="fas fa-file-image"></i>
                                </div>
                                <h3><?php echo $flyers_count; ?></h3>
                                <p class="text-muted">Flyers</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Quick Actions -->
                    <div class="row mt-4">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Quick Actions</h5>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <a href="manage-events.php?action=create" class="btn btn-primary w-100 mb-2">
                                                <i class="fas fa-plus me-2"></i> Add Event
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <a href="manage-gallery.php?action=create" class="btn btn-success w-100 mb-2">
                                                <i class="fas fa-plus me-2"></i> Add Gallery
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <a href="manage-flyers.php?action=create" class="btn btn-warning w-100 mb-2">
                                                <i class="fas fa-plus me-2"></i> Add Flyer
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <a href="../frontend/index.html" target="_blank" class="btn btn-info w-100 mb-2">
                                                <i class="fas fa-eye me-2"></i> View Website
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

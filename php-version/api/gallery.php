<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../backend/config/database.php';

$database = new Database();
$db = $database->getConnection();

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        getGallery($db);
        break;
    case 'POST':
        createGalleryItem($db);
        break;
    case 'DELETE':
        deleteGalleryItem($db);
        break;
    default:
        echo json_encode(['message' => 'Method not allowed']);
        break;
}

function getGallery($db) {
    $query = "SELECT * FROM gallery ORDER BY created_at DESC";
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    $gallery = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($gallery);
}

function createGalleryItem($db) {
    $data = json_decode(file_get_contents("php://input"));
    
    $query = "INSERT INTO gallery (title, description, category, image) 
              VALUES (:title, :description, :category, :image)";
    
    $stmt = $db->prepare($query);
    
    $stmt->bindParam(':title', $data->title);
    $stmt->bindParam(':description', $data->description);
    $stmt->bindParam(':category', $data->category);
    $stmt->bindParam(':image', $data->image);
    
    if($stmt->execute()) {
        $data->id = $db->lastInsertId();
        echo json_encode($data);
    } else {
        echo json_encode(['message' => 'Failed to create gallery item']);
    }
}

function deleteGalleryItem($db) {
    $id = isset($_GET['id']) ? $_GET['id'] : die();
    
    $query = "DELETE FROM gallery WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $id);
    
    if($stmt->execute()) {
        echo json_encode(['message' => 'Gallery item deleted successfully']);
    } else {
        echo json_encode(['message' => 'Failed to delete gallery item']);
    }
}
?>

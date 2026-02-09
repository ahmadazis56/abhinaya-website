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
        getFlyers($db);
        break;
    case 'POST':
        createFlyer($db);
        break;
    case 'DELETE':
        deleteFlyer($db);
        break;
    case 'PATCH':
        updateFlyer($db);
        break;
    default:
        echo json_encode(['message' => 'Method not allowed']);
        break;
}

function getFlyers($db) {
    $query = "SELECT * FROM flyers WHERE is_active = 1 ORDER BY created_at DESC";
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    $flyers = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($flyers);
}

function createFlyer($db) {
    $data = json_decode(file_get_contents("php://input"));
    
    $query = "INSERT INTO flyers (title, description, image, is_active) 
              VALUES (:title, :description, :image, :is_active)";
    
    $stmt = $db->prepare($query);
    
    $stmt->bindParam(':title', $data->title);
    $stmt->bindParam(':description', $data->description);
    $stmt->bindParam(':image', $data->image);
    $stmt->bindParam(':is_active', $data->is_active);
    
    if($stmt->execute()) {
        $data->id = $db->lastInsertId();
        echo json_encode($data);
    } else {
        echo json_encode(['message' => 'Failed to create flyer']);
    }
}

function deleteFlyer($db) {
    $id = isset($_GET['id']) ? $_GET['id'] : die();
    
    $query = "DELETE FROM flyers WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $id);
    
    if($stmt->execute()) {
        echo json_encode(['message' => 'Flyer deleted successfully']);
    } else {
        echo json_encode(['message' => 'Failed to delete flyer']);
    }
}

function updateFlyer($db) {
    $id = isset($_GET['id']) ? $_GET['id'] : die();
    $data = json_decode(file_get_contents("php://input"));
    
    $query = "UPDATE flyers SET is_active = :is_active WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':is_active', $data->is_active);
    $stmt->bindParam(':id', $id);
    
    if($stmt->execute()) {
        echo json_encode(['message' => 'Flyer updated successfully']);
    } else {
        echo json_encode(['message' => 'Failed to update flyer']);
    }
}
?>

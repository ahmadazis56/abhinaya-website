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
        getEvents($db);
        break;
    case 'POST':
        createEvent($db);
        break;
    case 'DELETE':
        deleteEvent($db);
        break;
    default:
        echo json_encode(['message' => 'Method not allowed']);
        break;
}

function getEvents($db) {
    $query = "SELECT * FROM events ORDER BY created_at DESC";
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    $events = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($events);
}

function createEvent($db) {
    $data = json_decode(file_get_contents("php://input"));
    
    $query = "INSERT INTO events (title, description, event_date, image) 
              VALUES (:title, :description, :event_date, :image)";
    
    $stmt = $db->prepare($query);
    
    $stmt->bindParam(':title', $data->title);
    $stmt->bindParam(':description', $data->description);
    $stmt->bindParam(':event_date', $data->date);
    $stmt->bindParam(':image', $data->image);
    
    if($stmt->execute()) {
        $data->id = $db->lastInsertId();
        echo json_encode($data);
    } else {
        echo json_encode(['message' => 'Failed to create event']);
    }
}

function deleteEvent($db) {
    $id = isset($_GET['id']) ? $_GET['id'] : die();
    
    $query = "DELETE FROM events WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $id);
    
    if($stmt->execute()) {
        echo json_encode(['message' => 'Event deleted successfully']);
    } else {
        echo json_encode(['message' => 'Failed to delete event']);
    }
}
?>

<?php
header('Content-type: text/plain');
$username = "bplhkotabogor";
$password = "bplhkotabogor,216";
$hostname = "localhost";	
$database = "bplhkotabogor";
// Opens a connection to a mySQL server
$connection=mysql_connect ($hostname, $username, $password);
if (!$connection) {
  die('Not connected : ' . mysql_error());
}
// Set the active mySQL database
$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
}
// json output - insert table name below after "FROM"
$query = 'SELECT * FROM lokasiuji_ambien';
$dbquery = mysql_query($query);
if(! $dbquery )
{
  die('Could not get data: ' . mysql_error());
}
// Parse the dbquery into geojson 
// ================================================
// ================================================
// Return markers as GeoJSON
$geojson = array(
    'type'      => 'FeatureCollection',
    'features'  => $feature
 );
while($row = mysql_fetch_assoc($dbquery)) {
    
	$feature = array(
        'type' => 'Feature', 
      'geometry' => array(
        'type' => 'Point',
        'coordinates' => array((float)$row['lng'],(float)$row['lat'])
            ),
			'properties' => array(
				'lokasiuji_ambien_id' => $row['lokasiuji_ambien_id'], 	
				'nama_lokasi' => $row['nama_lokasi'],	
				'kelurahan_id' => $row['kelurahan_id'],	
				'marker-symbol' => $row['marker-symbol'],
				'marker-color' => $row['marker-color'],	
				'marker-size' => $row['marker-size'],	
				'description' => $row['description']	
			//Other fields here, end without a comma
            )
        );
    array_push($geojson, $feature);
};
mysql_close($connection);
// // Return routing result
    header("Content-Type:application/json",true);
    echo json_encode($geojson);
?>
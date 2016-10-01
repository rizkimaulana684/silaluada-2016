<?php
header('Content-type: text/plain');
$username = "root";
$password = "5437ul";
$hostname = "localhost";	
$database = "databplh";
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
$query = 'SELECT * FROM lokasiuji_sumur';
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
				'lokasiuji_sumur_id' => $row['lokasiuji_sumur_id'], 	
				'alamat' => $row['alamat'],	
				'nama_lokasi' => $row['nama_lokasi'],					
				'kelurahan_id' => $row['kelurahan_id'],	
				'icon_map' => $row['icon_map']
				
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
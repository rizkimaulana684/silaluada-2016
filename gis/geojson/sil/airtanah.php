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
$query = 'SELECT * FROM pemanfaatan_air';
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
				'pemanfaatan_air_id' => $row['pemanfaatan_air_id'], 
				'nama_kepemilikan' => $row['nama_kepemilikan'],				'tahun_pengawasan' => $row['tahun_pengawasan'],						
				'kelurahan_id' => $row['kelurahan_id'],	
				'alamat' => $row['alamat'],	
				'icon_map' => $row['icon_map'],				
				'no_izin' => $row['no_izin'],					
				'debit_air' => $row['debit_air']				

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
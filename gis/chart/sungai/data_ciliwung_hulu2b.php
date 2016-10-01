<?php
include ("sambung.php");

$sth = mysql_query("SELECT arsenic_as FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows = array();
$rows['name'] = 'Arsenic (As)';
while($r = mysql_fetch_array($sth)) {
    $rows['data'][] = $r['arsenic_as'];
}

$sth = mysql_query("SELECT cobalt_co FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows1 = array();
$rows1['name'] = 'Cobalt (Co)';
while($r = mysql_fetch_array($sth)) {
    $rows1['data'][] = $r['cobalt_co'];
}

$sth = mysql_query("SELECT selenium_se FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows2 = array();
$rows2['name'] = 'Selenium (Se)';
while($r = mysql_fetch_array($sth)) {
    $rows2['data'][] = $r['selenium_se'];
}

$sth = mysql_query("SELECT mercury_hg FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows3 = array();
$rows3['name'] = 'Mercury (Hg)';
while($r = mysql_fetch_array($sth)) {
    $rows3['data'][] = $r['mercury_hg'];
}

$sth = mysql_query("SELECT free_chlorine_cl2 FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows4 = array();
$rows4['name'] = 'Free Chlorine (Cl2)';
while($r = mysql_fetch_array($sth)) {
    $rows4['data'][] = $r['free_chlorine_cl2'];
}

$sth = mysql_query("SELECT barium_ba FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows5 = array();
$rows5['name'] = 'Barium (Ba)';
while($r = mysql_fetch_array($sth)) {
    $rows5['data'][] = $r['barium_ba'];
}

$sth = mysql_query("SELECT fecal_coliform FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows6 = array();
$rows6['name'] = 'Fecal Coliform';
while($r = mysql_fetch_array($sth)) {
    $rows6['data'][] = $r['fecal_coliform'];
}

$result = array();
array_push($result,$rows);
array_push($result,$rows1);
array_push($result,$rows2);
array_push($result,$rows3);
array_push($result,$rows4);
array_push($result,$rows5);
array_push($result,$rows6);

print json_encode($result, JSON_NUMERIC_CHECK);

mysql_close($con);
?>

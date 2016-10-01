<?php
include ("sambung.php");

$sth = mysql_query("SELECT total_phospate_po4 FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows = array();
$rows['name'] = 'Total Phospate (PO4)';
while($r = mysql_fetch_array($sth)) {
    $rows['data'][] = $r['total_phospate_po4'];
}

$sth = mysql_query("SELECT nitrate_no3 FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows1 = array();
$rows1['name'] = 'Nitrate (NO3)';
while($r = mysql_fetch_array($sth)) {
    $rows1['data'][] = $r['nitrate_no3'];
}

$sth = mysql_query("SELECT arsenic_as FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows2 = array();
$rows2['name'] = 'Arsenic (As)';
while($r = mysql_fetch_array($sth)) {
    $rows2['data'][] = $r['arsenic_as'];
}

$sth = mysql_query("SELECT cobalt_co FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows3 = array();
$rows3['name'] = 'Cobalt (Co)';
while($r = mysql_fetch_array($sth)) {
    $rows3['data'][] = $r['cobalt_co'];
}

$sth = mysql_query("SELECT boron_b FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows4 = array();
$rows4['name'] = 'Boron (B)';
while($r = mysql_fetch_array($sth)) {
    $rows4['data'][] = $r['boron_b'];
}

$sth = mysql_query("SELECT selenium_se FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows5 = array();
$rows5['name'] = 'Selenium (Se)';
while($r = mysql_fetch_array($sth)) {
    $rows5['data'][] = $r['selenium_se'];
}

$sth = mysql_query("SELECT cadmium_cd FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows6 = array();
$rows6['name'] = 'Cadmium (Cd)';
while($r = mysql_fetch_array($sth)) {
    $rows6['data'][] = $r['cadmium_cd'];
}

$sth = mysql_query("SELECT chrom_hexavalen_cr6 FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows7 = array();
$rows7['name'] = 'Chrom Hexavalen (Cr6)';
while($r = mysql_fetch_array($sth)) {
    $rows7['data'][] = $r['chrom_hexavalen_cr6'];
}


$result = array();
array_push($result,$rows);
array_push($result,$rows1);
array_push($result,$rows2);
array_push($result,$rows3);
array_push($result,$rows4);
array_push($result,$rows5);
array_push($result,$rows6);
array_push($result,$rows7);

print json_encode($result, JSON_NUMERIC_CHECK);

mysql_close($con);
?>

<?php
include ("sambung.php");

$sth = mysql_query("SELECT temperature FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows = array();
$rows['name'] = 'Temperatur';
while($r = mysql_fetch_array($sth)) {
    $rows['data'][] = $r['temperature'];
}

$sth = mysql_query("SELECT tds FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows1 = array();
$rows1['name'] = 'TDS';
while($r = mysql_fetch_array($sth)) {
    $rows1['data'][] = $r['tds'];
}

$sth = mysql_query("SELECT tss FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows2 = array();
$rows2['name'] = 'TSS';
while($r = mysql_fetch_array($sth)) {
    $rows2['data'][] = $r['tss'];
}

$sth = mysql_query("SELECT debit FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows3 = array();
$rows3['name'] = 'Debit';
while($r = mysql_fetch_array($sth)) {
    $rows3['data'][] = $r['debit'];
}

$sth = mysql_query("SELECT ph FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows4 = array();
$rows4['name'] = 'PH';
while($r = mysql_fetch_array($sth)) {
    $rows4['data'][] = $r['ph'];
}

$sth = mysql_query("SELECT cod FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows5 = array();
$rows5['name'] = 'COD';
while($r = mysql_fetch_array($sth)) {
    $rows5['data'][] = $r['cod'];
}

$sth = mysql_query("SELECT do FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows6 = array();
$rows6['name'] = 'DO';
while($r = mysql_fetch_array($sth)) {
    $rows6['data'][] = $r['do'];
}

$sth = mysql_query("SELECT sulfide_h2s FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows7 = array();
$rows7['name'] = 'Sulfide H2S';
while($r = mysql_fetch_array($sth)) {
    $rows7['data'][] = $r['sulfide_h2s'];
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

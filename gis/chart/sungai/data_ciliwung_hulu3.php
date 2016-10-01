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

$sth = mysql_query("SELECT boron_b FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows2 = array();
$rows2['name'] = 'Boron (B)';
while($r = mysql_fetch_array($sth)) {
    $rows2['data'][] = $r['boron_b'];
}

$sth = mysql_query("SELECT cadmium_cd FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows3 = array();
$rows3['name'] = 'Cadmium (Cd)';
while($r = mysql_fetch_array($sth)) {
    $rows3['data'][] = $r['cadmium_cd'];
}

$sth = mysql_query("SELECT chrom_hexavalen_cr6 FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows4 = array();
$rows4['name'] = 'Chrom Hexavalen (Cr6)';
while($r = mysql_fetch_array($sth)) {
    $rows4['data'][] = $r['chrom_hexavalen_cr6'];
}

$sth = mysql_query("SELECT copper_cu FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows5 = array();
$rows5['name'] = 'Copper (Cu)';
while($r = mysql_fetch_array($sth)) {
    $rows5['data'][] = $r['copper_cu'];
}

$sth = mysql_query("SELECT lead_pb FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows6 = array();
$rows6['name'] = 'Lead (Pb)';
while($r = mysql_fetch_array($sth)) {
    $rows6['data'][] = $r['lead_pb'];
}

$sth = mysql_query("SELECT zinc_zn FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows7 = array();
$rows7['name'] = 'Zinc (Zn)';
while($r = mysql_fetch_array($sth)) {
    $rows7['data'][] = $r['zinc_zn'];
}

$sth = mysql_query("SELECT cyanide_cn FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows8 = array();
$rows8['name'] = 'Cyanide (Cn)';
while($r = mysql_fetch_array($sth)) {
    $rows8['data'][] = $r['cyanide_cn'];
}

$sth = mysql_query("SELECT flouride_f FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows9 = array();
$rows9['name'] = 'Flouride (F)';
while($r = mysql_fetch_array($sth)) {
    $rows9['data'][] = $r['flouride_f'];
}

$sth = mysql_query("SELECT nitrite_no2 FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows10 = array();
$rows10['name'] = 'Nitrite (NO2)';
while($r = mysql_fetch_array($sth)) {
    $rows10['data'][] = $r['nitrite_no2'];
}

$sth = mysql_query("SELECT ammonia FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows11 = array();
$rows11['name'] = 'Ammonia';
while($r = mysql_fetch_array($sth)) {
    $rows11['data'][] = $r['ammonia'];
}

$sth = mysql_query("SELECT chloride_cl FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows12 = array();
$rows12['name'] = 'Chloride (Cl)';
while($r = mysql_fetch_array($sth)) {
    $rows12['data'][] = $r['chloride_cl'];
}

$sth = mysql_query("SELECT iron_fe FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows13 = array();
$rows13['name'] = 'Iron (Fe)';
while($r = mysql_fetch_array($sth)) {
    $rows13['data'][] = $r['iron_fe'];
}

$sth = mysql_query("SELECT manganese_mn FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows14 = array();
$rows14['name'] = 'Manganese (Mn)';
while($r = mysql_fetch_array($sth)) {
    $rows14['data'][] = $r['manganese_mn'];
}

$sth = mysql_query("SELECT sulfat FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows15 = array();
$rows15['name'] = 'Sulfat';
while($r = mysql_fetch_array($sth)) {
    $rows15['data'][] = $r['sulfat'];
}

$sth = mysql_query("SELECT total_coliform FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows16 = array();
$rows16['name'] = 'Total Coliform';
while($r = mysql_fetch_array($sth)) {
    $rows16['data'][] = $r['total_coliform'];
}

$sth = mysql_query("SELECT oil_fat FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows17 = array();
$rows17['name'] = 'Oil Fat';
while($r = mysql_fetch_array($sth)) {
    $rows17['data'][] = $r['oil_fat'];
}

$sth = mysql_query("SELECT detergent_mbas FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows18 = array();
$rows18['name'] = 'Detergent (Mbbas)';
while($r = mysql_fetch_array($sth)) {
    $rows18['data'][] = $r['detergent_mbas'];
}

$sth = mysql_query("SELECT phenol FROM `pengujian_sungai` WHERE nama_sungai = 'CILIWUNG-Hulu'");
$rows19 = array();
$rows19['name'] = 'Phenol';
while($r = mysql_fetch_array($sth)) {
    $rows19['data'][] = $r['phenol'];
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
array_push($result,$rows8);
array_push($result,$rows9);
array_push($result,$rows10);
array_push($result,$rows11);
array_push($result,$rows12);
array_push($result,$rows13);
array_push($result,$rows14);
array_push($result,$rows15);
array_push($result,$rows16);
array_push($result,$rows17);
array_push($result,$rows18);
array_push($result,$rows19);

print json_encode($result, JSON_NUMERIC_CHECK);

mysql_close($con);
?>

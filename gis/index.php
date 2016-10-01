<!DOCTYPE html>
<html>
<head>
   <meta charset='utf-8'>
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
   <link rel="stylesheet" href="assets/css/styles.css">   
   
   <script src='https://api.mapbox.com/mapbox.js/v2.4.0/mapbox.js'></script>
   <link href='https://api.mapbox.com/mapbox.js/v2.4.0/mapbox.css' rel='stylesheet' />
<!--   <script src='assets/js/control.scale.js'></script> -->
  <script src='assets/js/togglemenu.js'></script> 
  <script type="text/javascript" src="//code.jquery.com/jquery-latest.js"></script>  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  
   <script src="assets/js/jquery-latest.min.js" type="text/javascript"></script>
   <script src="assets/js/script.js"></script> 
<!-- php gret content -->   
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<title>Sistem Informasi Geografis Lingkugan Hidup Kota Bogor</title>
</head>
<body>

  <div id="header">
    <div id="imgLogoBgr"><img src="assets/images/logokotabogor.gif" alt="BPLH Kota Bogor" width="40"></div>
    <div id="titleLH">Sistem Informasi Geografis Lingkungan Hidup Kota Bogor</div>	
  </div> 

  <div id="ShowHideBtnBar">
    	<div id="BtnLeftSide">
			<img src="assets/images/home.png" width="25" height="22" border="0" 
			alt="Home"/>
		</div>
  		<div id="BtnLeftSide">
			<img src="assets/images/BtnSidebar.png" width="25" height="22" border="0" 
			alt="Click to toggle the sidebar" onclick="toggleLeftSide()" />
		</div>
  		<div id="BtnBotoom">
			<img src="assets/images/BtnBottom.png" width="25" height="22" border="0" 
			alt="Click to toggle the bottom" onclick="toggleBottom()" />					
		</div>	
		<div id="BtnDetail">
			<img src="assets/images/BtnBottom.png" width="25" height="22" border="0" 
			alt="Click to toggle the detail" onclick="toggleDetail()" />			
		</div>		
  </div>  
  
  	<div id="HeadSide">
		<div id="HeadSideText">Menu Layer</div>
	</div>
    <div id="leftSide" style="width:260px;">
        <div id="leftSidefText" style="display:block;">
		<div id='pilihKecamatan'>Kecamatan:		
		<select id='pilihKec'>
		  <option value='semua'>KOTA BOGOR</option>
		  <option value='bosel'>BOGOR SELATAN</option>
		  <option value='bout'>BOGOR UTARA</option>
		  <option value='boteng'>BOGOR TENGAH</option>
		  <option value='botim'>BOGOR TIMUR</option>
		  <option value='sareal'>TANAH SAREAL</option> 
		  <option value='bobar'>BOGOR BARAT</option>
		</select>
	</div>		   
		<div id='leftmenu'>
		<ul>
		   <li class='has-sub'><a href='#'><span>Pengendalian PLH</span></a>
			  <ul>
				 <li><a href='#' id="sungai"><span>Titik Uji Air Sungai</span></a></li> 
				 <li><a href='#' id="ciliwung"><span>Sungai Ciliwung</span></a></li>	
				 <li><a href='#' id="cibalok"><span>Sungai Cibalok</span></a></li>	
				 <li><a href='#' id="ciparigi"><span>Sungai Ciparigi</span></a></li>			 
				 <li><a href='#' id="ciluar"><span>Sungai Ciluar</span></a></li>	
				 <li><a href='#' id="cisadane"><span>Sungai Cisadane</span></a></li>	
				 <li><a href='#' id="cisindangbarang"><span>Sungai Cisindang Barang</span></a></li>
				 <li><a href='#' id="cipakancilan"><span>Sungai Cipakancilan</span></a></li>	
				 <li><a href='#' id="cianten"><span>Sungai Cianten</span></a></li>	
				 <li><a href='#' id="cidepit"><span>Sungai Cidepit</span></a></li>	
				 <li><a href='#' id="cikaret"><span>Sungai Cikaret</span></a></li>				 
				 <li><a href='#' id="sumur"><span>Titik Uji Air Sumur</span></a></li>
				 <li><a href='#' id="situ"><span>Titik Uji Air Situ</span></a></li>
				 <li><a href='#' id="situgede"><span>Titik Uji Air Situ Gede</span></a></li>
				 <li><a href='#' id="situpanjang"><span>Titik Uji Air Situ Panjang</span></a></li>
				 <li><a href='#' id="situanggalena"><span>Titik Uji Air Situ Anggalena</span></a></li>
				 <li><a href='#' id="cerobong"><span>Titik Emisi Cerobong</span></a></li>
				 <li><a href='#' id="ambien"><span>Titik Emisi Ambien</span></a></li>
				 <li class='last'><a href='#' id="tanah"><span>Titik Uji Tanah</span></a></li>
			  </ul>
		   </li>
		   <li class='has-sub'><a href='#'><span>Upaya Pengendalian</span></a>
			  <ul>
				 <li><a href='#' id="btiga"><span>Titik Pengawasan B3</span></a></li>
				 <li><a href='#' id="limbahcair"><span>Tiitik Pengawasan Limbah Cair</span></a></li>
				 <li class='last'><a href='#' id="biogas"><span>Titik Pembangunan Biogas</span></a></li>
			  </ul>
		   </li>   
		   <li class='has-sub'><a href='#'><span>Konservasi SDA</span></a>
			  <ul>
				 <li><a href='#' id="mataair"><span>Lokasi Mata Air</span></a></li>
				 <li><a href='#' id="airtanah"><span>Lokasi Perusahaan Pengguna Air Tanah</span></a></li>
				 <li><a href='#' id="pantau"><span>Lokasi Sumur Pantau</span></a></li>
				 <li><a href='#' id="resapan"><span>Lokasi Sumur Resapan</span></a></li>
				 <li><a href='#' id="imbuhan"><span>Lokasi Sumur Imbuhan</span></a></li>
				 <li><a href='#' id="hutankota"><span>Lokasi Hutan Kota</span></a></li>
				 <li><a href='#' id="sehati"><span>SEHATI</span></a></li>
				 <li><a href='#' id="kehati"><span>KEHATI</span></a></li>
				 <li class='last'><a href='#' id="pemerhati"><span>PEMERHATI</span></a></li>
			  </ul>
		   </li>   
		   <li class='has-sub'><a href='#'><span>Pengawasan Dampak Lingkungan</span></a>
			  <ul>
				 <li><a href='#' id="kegiatanusaha"><span>Peta Kegiatan Usaha</span></a></li>
				 <li class='last'><a href='#' id="ukm"><span>Peta UKM</span></a></li>
			  </ul>
		   </li>     
		   <li class='has-sub'><a href='#'><span>Kemitraan Lingkungan Hidup</span></a>
			  <ul>
				 <li><a href='#' id="adipura"><span>Titik Pantau Adipura</span></a></li>
				 <li class='last'><a href='#' id="adiwiyata"><span>Sekolah Adiwiyata</span></a></li>
			  </ul>
		   </li> 
		   <li class='has-sub'><a href='#'><span>Zona Air Tanah</span></a>
			  <ul>
				 <li><a href='#' id="zat_kotabogor"><span>ZAT Kota Bogor</span></a></li>
				 <li><a href='#' id="zat_rusak"><span>Zona Rusak</span></a></li>
				 <li><a href='#' id="zat_kritis"><span>Zona Kritis</span></a></li>
				 <li><a href='#' id="zat_rawan"><span>Zona Rawan</span></a></li>				 			 
				 <li class='last'><a href='#' id="zat_aman"><span>Zona Aman</span></a></li>
			  </ul>
		   </li>  		   
		   <li class='has-sub'><a href='#'><span>Peta Dasar</span></a>
			  <ul>
				 <li><a href='#' id="bataskecamatan"><span>Batas Kecamatan</span></a></li>
				 <li><a href='#' id="bataskelurahan"><span>Batas Kelurahan</span></a></li>
 				 <li><a href='#' id="badanjalan"><span>Badan Jalan</span></a></li>
				 <li><a href='#' id="sungaibesar"><span>Sungai Besar</span></a></li>
				 <li><a href='#' id="sungaikecil"><span>Sungai Kecil</span></a></li>				 
				 <li><a href='#' id="rtrw"><span>Rencana Tata Ruang Wilayah</span></a></li>				 
			  </ul>
		   </li>   
		   <li class='has-sub'><a href='#'><span>Filter Area</span></a>
			  <ul>
				 <li><a href='#' id="kotabogor"><span>Kota Bogor</span></a></li>
				 <li><a href='#' id="bogorutara"><span>Kecamatan Bogor Utara</span></a></li>
				 <li><a href='#' id="bogorselatan"><span>Kecamatan Bogor Selatan</span></a></li>
				 <li><a href='#' id="bogorbarat"><span>Kecamatan Bogor Barat</span></a></li> 
				 <li><a href='#' id="bogortimur"><span>Kecamatan Bogor Timur</span></a></li>		
				 <li><a href='#' id="bogortengah"><span>Kecamatan Bogor Tengah</span></a></li>
				 <li class='last'><a href='#' id="tanahsareal"><span>Kecamatan Tanah Sareal</span></a></li>
			  </ul>
		   </li>     
	   
		</ul>
		</div>
		
        </div>
    </div>

    <div id="map"></div>
	
    <div id="bottom" style="width:0%;">
		<div id="HeadBottom" style="width:0%;">
			<div id="HeadBottomText" style="display:none;">				
			</div>
		</div>		
        <div id="bottomText" style="display:none;">


        </div>
    </div>	
<!-- Awal Detail Grafik -->
    <div id="Detail" style="width:0%;">
		<div id="HeadDetail" style="width:0%;">
			<div id="HeadDetailText" style="display:none;"></div>
		</div>		
        <div id="DetailText" style="display:none;">


        </div>
    </div>	
<!-- Akhir Detail Grafik -->
	
</body>
</html>
<script src='assets/js/app.js'></script>
<script src='assets/js/map-functions.js'></script>
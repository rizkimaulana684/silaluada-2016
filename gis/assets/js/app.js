L.mapbox.accessToken = 'pk.eyJ1Ijoic2h6bSIsImEiOiJoT1NuRm0wIn0.SlPjjLaV22Yvq-i1byYCFg';
var map = L.mapbox.map('map').setView([-6.6009458,106.7977458], 13);		

	
/*
var geocoder_control = L.mapbox.geocoderControl('mapbox.places', { position: 'topright', keepOpen: false, autocomplete: true });
map.addControl(geocoder_control);

geocoder_control.on('select', function(object){
    var coord = object.feature.geometry.coordinates;

    L.mapbox.featureLayer({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: coord
        },
        properties: {
            title: 'Ini Lokasi yang Anda Cari',
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'star'
        }
    }).addTo(map);

});
*/
map.zoomControl.setPosition('topright');
L.control.scale().addTo(map);

L.control.layers({
			'Streets': L.mapbox.tileLayer('mapbox.streets').addTo(map),
			'Light': L.mapbox.tileLayer('mapbox.light'),
			'Outdoors': L.mapbox.tileLayer('mapbox.outdoors'),
			'Satellite': L.mapbox.tileLayer('mapbox.satellite'),
			'Emerald': L.mapbox.tileLayer('mapbox.emerald'),
			'Dark': L.mapbox.tileLayer('mapbox.dark')		
		}, {
			'Batas Kecamatan': L.mapbox.featureLayer()
				.loadURL('geojson/rth/adm_kec_kotabogor_warna.geojson'),
			'Batas Kelurahan': L.mapbox.featureLayer()
				.loadURL('geojson/rth/adm_kel_kotabogor_warna.geojson'),
			'Sungai Besar': L.mapbox.featureLayer()
				.loadURL('geojson/rth/sungai_besar.geojson'),		
			'Sungai Kecil': L.mapbox.featureLayer()
				.loadURL('geojson/rth/sungai_kecil.geojson'),
			'RTRW': L.mapbox.featureLayer()
				.loadURL('geojson/ren/polaruang_warna.geojson'),
			'Zona Air Tanah': L.mapbox.featureLayer()
				.loadURL('geojson/zat/zona_airtanah_warna_baru.geojson')		
		}).addTo(map);

//L.Control.Scale({position: 'bottomright'}).addTo(map);	


L.mapbox.featureLayer()
		.loadURL('geojson/rth/adm_kotabogor.geojson')		
		.addTo(map);		

//L.mapbox.featureLayer()
//		.loadURL('geojson/rth/canvas_admkotabogor.geojson')		
//		.addTo(map);		
	
//map.on('popupclose', function(e) {
//    console.log(e.target);
   // map.setView([-6.6009458,106.7977458], 13);
//	map.setView([-6.6009458,106.7977458]);
//});	
		
var groupCisadane = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/cisadane.geojson').addTo(groupCisadane);
var groupCiliwung = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/ciliwung.geojson').addTo(groupCiliwung);
var groupCidepit = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/cidepit.geojson').addTo(groupCidepit);
var groupCikaret = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/cikaret.geojson').addTo(groupCikaret);
var groupCipakancilan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/cipakancilan.geojson').addTo(groupCipakancilan);
var groupCibalok = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/cibalok.geojson').addTo(groupCibalok);
var groupCiluar = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/ciluar.geojson').addTo(groupCiluar);
var groupCisindangbarang = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/cisindangbarang.geojson').addTo(groupCisindangbarang);
var groupCiparigi = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/ciparigi.geojson').addTo(groupCiparigi);
var groupCianten = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/cianten.geojson').addTo(groupCianten);		

var groupSumur = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sumur_geojson.php').addTo(groupSumur);
var groupSumurSelatan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sumur_bosel_geojson.php').addTo(groupSumurSelatan);
var groupSumurUtara = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sumur_bout_geojson.php').addTo(groupSumurUtara);
var groupSumurTengah = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sumur_boteng_geojson.php').addTo(groupSumurTengah);
var groupSumurTimur = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sumur_botim_geojson.php').addTo(groupSumurTimur);
var groupSumurSareal = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sumur_sareal_geojson.php').addTo(groupSumurSareal);
var groupSumurBarat = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sumur_bobar_geojson.php').addTo(groupSumurBarat);
		
var groupSitu = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/situ_baru.geojson').addTo(groupSitu);
var groupSituGede = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/situgede.geojson').addTo(groupSituGede);
var groupSituPanjang = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/situpanjang.geojson').addTo(groupSituPanjang);
var groupSituAnggalena = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/situanggalena.geojson').addTo(groupSituAnggalena);
		
var groupCerobong = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/cerobong_geojson.php').addTo(groupCerobong);
var groupCerobongSelatan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/cerobong_bosel_geojson.php').addTo(groupCerobongSelatan);
var groupCerobongUtara = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/cerobong_bout_geojson.php').addTo(groupCerobongUtara);
var groupCerobongTengah = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/cerobong_boteng_geojson.php').addTo(groupCerobongTengah);
var groupCerobongTimur = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/cerobong_botim_geojson.php').addTo(groupCerobongTimur);
var groupCerobongSareal = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/cerobong_sareal_geojson.php').addTo(groupCerobongSareal);
var groupCerobongBarat = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/cerobong_bobar_geojson.php').addTo(groupCerobongBarat);		
		
var groupAmbien = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/ambien_geojson.php').addTo(groupAmbien);
var groupAmbienSelatan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/ambien_bosel_geojson.php').addTo(groupAmbienSelatan);
var groupAmbienUtara = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/ambien_bout_geojson.php').addTo(groupAmbienUtara);
var groupAmbienTengah = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/ambien_boteng_geojson.php').addTo(groupAmbienTengah);
var groupAmbienTimur = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/ambien_botim_geojson.php').addTo(groupAmbienTimur);
var groupAmbienSareal = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/ambien_sareal_geojson.php').addTo(groupAmbienSareal);
var groupAmbienBarat = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/ambien_bobar_geojson.php').addTo(groupAmbienBarat);		
		
var groupTanah = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/tanah_geojson.php').addTo(groupTanah);
var groupTanahSelatan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/tanah_bosel_geojson.php').addTo(groupTanahSelatan);
var groupTanahUtara = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/tanah_bout_geojson.php').addTo(groupTanahUtara);
var groupTanahTengah = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/tanah_boteng_geojson.php').addTo(groupTanahTengah);
var groupTanahTimur = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/tanah_botim_geojson.php').addTo(groupTanahTimur);		
var groupTanahSareal = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/tanah_sareal_geojson.php').addTo(groupTanahSareal);
var groupTanahBarat = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/tanah_bobar_geojson.php').addTo(groupTanahBarat);
		
var groupBtiga = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/btiga_geojson.php').addTo(groupBtiga);
var groupBtigaSelatan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/btiga_bosel_geojson.php').addTo(groupBtigaSelatan);
var groupBtigaUtara = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/btiga_bout_geojson.php').addTo(groupBtigaUtara);
var groupBtigaTengah = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/btiga_boteng_geojson.php').addTo(groupBtigaTengah);
var groupBtigaTimur = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/btiga_botim_geojson.php').addTo(groupBtigaTimur);
var groupBtigaSareal = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/btiga_sareal_geojson.php').addTo(groupBtigaSareal);
var groupBtigaBarat = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/btiga_bobar_geojson.php').addTo(groupBtigaBarat);
		
var groupLimbahcair = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/limbahcair_geojson.php').addTo(groupLimbahcair);
var groupLimbahcairSelatan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/limbahcair_bosel_geojson.php').addTo(groupLimbahcairSelatan);
var groupLimbahcairUtara = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/limbahcair_bout_geojson.php').addTo(groupLimbahcairUtara);
var groupLimbahcairTengah = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/limbahcair_boteng_geojson.php').addTo(groupLimbahcairTengah);
var groupLimbahcairTimur = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/limbahcair_botim_geojson.php').addTo(groupLimbahcairTimur);
var groupLimbahcairSareal = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/limbahcair_sareal_geojson.php').addTo(groupLimbahcairSareal);
var groupLimbahcairBarat = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/limbahcair_bobar_geojson.php').addTo(groupLimbahcairBarat);
		
var groupBiogas = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/biogas_geojson.php').addTo(groupBiogas);
var groupBiogasSelatan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/biogas_bosel_geojson.php').addTo(groupBiogasSelatan);
var groupBiogasUtara = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/biogas_bout_geojson.php').addTo(groupBiogasUtara);
var groupBiogasTengah = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/biogas_boteng_geojson.php').addTo(groupBiogasTengah);
var groupBiogasTimur = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/biogas_botim_geojson.php').addTo(groupBiogasTimur);
var groupBiogasSareal = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/biogas_sareal_geojson.php').addTo(groupBiogasSareal);
var groupBiogasBarat = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/biogas_bobar_geojson.php').addTo(groupBiogasBarat);
		
var groupMataair = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/mataair_geojson.php').addTo(groupMataair);
var groupMataairSelatan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/mataair_bosel_geojson.php').addTo(groupMataairSelatan);
var groupMataairUtara = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/mataair_bout_geojson.php').addTo(groupMataairUtara);
var groupMataairTengah = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/mataair_boteng_geojson.php').addTo(groupMataairTengah);
var groupMataairTimur = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/mataair_botim_geojson.php').addTo(groupMataairTimur);
var groupMataairSareal = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/mataair_sareal_geojson.php').addTo(groupMataairSareal);
var groupMataairBarat = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/mataair_bobar_geojson.php').addTo(groupMataairBarat);
		
var groupAirtanah = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/airtanah_geojson.php').addTo(groupAirtanah);	
var groupAirtanahSelatan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/airtanah_bosel_geojson.php').addTo(groupAirtanahSelatan);		
var groupAirtanahTimur = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/airtanah_botim_geojson.php').addTo(groupAirtanahTimur);	
var groupAirtanahUtara = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/airtanah_bout_geojson.php').addTo(groupAirtanahUtara);
var groupAirtanahTengah = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/airtanah_boteng_geojson.php').addTo(groupAirtanahTengah);			
var groupAirtanahSareal = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/airtanah_tansar_geojson.php').addTo(groupAirtanahSareal);		
var groupAirtanahBarat = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/airtanah_bobar_geojson.php').addTo(groupAirtanahBarat);		
		
var groupPantau = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/pantau_geojson.php').addTo(groupPantau);
var groupPantauSelatan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/pantau_bosel_geojson.php').addTo(groupPantauSelatan);
var groupPantauUtara = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/pantau_bout_geojson.php').addTo(groupPantauUtara);
var groupPantauTengah = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/pantau_boteng_geojson.php').addTo(groupPantauTengah);
var groupPantauTimur = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/pantau_botim_geojson.php').addTo(groupPantauTimur);
var groupPantauSareal = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/pantau_sareal_geojson.php').addTo(groupPantauSareal);
var groupPantauBarat = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/pantau_bobar_geojson.php').addTo(groupPantauBarat);
				
var groupResapan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/resapan_geojson.php').addTo(groupResapan);
var groupResapanSelatan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/resapan_bosel_geojson.php').addTo(groupResapanSelatan);
var groupResapanUtara = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/resapan_bout_geojson.php').addTo(groupResapanUtara);
var groupResapanTengah = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/resapan_boteng_geojson.php').addTo(groupResapanTengah);
var groupResapanTimur = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/resapan_botim_geojson.php').addTo(groupResapanTimur);
var groupResapanSareal = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/resapan_sareal_geojson.php').addTo(groupResapanSareal);
var groupResapanBarat = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/resapan_bobar_geojson.php').addTo(groupResapanBarat);
		
var groupImbuhan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/imbuhan_geojson.php').addTo(groupImbuhan);
var groupImbuhanSelatan = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/imbuhan_bosel_geojson.php').addTo(groupImbuhanSelatan);
var groupImbuhanUtara = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/imbuhan_bout_geojson.php').addTo(groupImbuhanUtara);
var groupImbuhanTengah = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/imbuhan_boteng_geojson.php').addTo(groupImbuhanTengah);
var groupImbuhanTimur = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/imbuhan_botim_geojson.php').addTo(groupImbuhanTimur);
var groupImbuhanSareal = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/imbuhan_sareal_geojson.php').addTo(groupImbuhanSareal);
var groupImbuhanBarat = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/imbuhan_bobar_geojson.php').addTo(groupImbuhanBarat);

		
var groupHutankota = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sil/hutankota.geojson').addTo(groupHutankota);
		
var groupSehati = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/sehati_geojson.php').addTo(groupSehati);
var groupKehati = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/kehati_geojson.php').addTo(groupKehati);
var groupPemerhati = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/pemerhati_geojson.php').addTo(groupPemerhati);
var groupKegiatanusaha = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/kegiatanusaha_geojson_baru.php').addTo(groupKegiatanusaha);
var groupUkm = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/ukm_geojson_baru.php').addTo(groupUkm);
var groupAdipura = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/adipura_geojson.php').addTo(groupAdipura);
var groupAdiwiyata = new L.LayerGroup();
        L.mapbox.featureLayer()
		.loadURL('geojson/adiwiyata_geojson.php').addTo(groupAdiwiyata);
		
//Zona Air Tanah
var groupZatKotaBogor = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/zat/zat_kotabogor.geojson').addTo(groupZatKotaBogor);			
var groupZatRusak = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/zat/zat_rusak.geojson').addTo(groupZatRusak);			
var groupZatKritis = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/zat/zat_kritis.geojson').addTo(groupZatKritis);			
var groupZatRawan = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/zat/zat_rawan.geojson').addTo(groupZatRawan);			
var groupZatAman = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/zat/zat_aman.geojson').addTo(groupZatAman);	
		
//Peta Dasar
var groupBatasKecamatan = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/rth/adm_kec_kotabogor_warna.geojson').addTo(groupBatasKecamatan);
var groupBatasKelurahan = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/rth/adm_kel_kotabogor_warna.geojson').addTo(groupBatasKelurahan);		
var groupBadanJalan = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/rth/badanjalan_kotabogor.geojson').addTo(groupBadanJalan);		
var groupSungaiBesar = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/rth/sungai_besar.geojson').addTo(groupSungaiBesar);		
var groupSungaiKecil = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/rth/sungai_kecil.geojson').addTo(groupSungaiKecil);		
var groupRTRW = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/ren/polaruang_warna.geojson').addTo(groupRTRW);	
		

var showSungai = document.getElementById("sungai");
showSungai.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupSungai);	 
       this.className = '';  
    } else {
       map.addLayer(groupSungai);
       this.className = 'active';
	   //map.legendControl.addLegend(legendSungai);
	   document.getElementById("bottomText").innerHTML = "";		   
	   document.getElementById("HeadBottomText").innerHTML = "Data Sungai Kota Bogor";	   
	}
};	   

var showCiliwung = document.getElementById("ciliwung");
showCiliwung.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupCiliwung);
       this.className = '';
    } else {
       map.addLayer(groupCiliwung);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";		   
	   document.getElementById("HeadBottomText").innerHTML = "Hasil Uji Sungai Ciliwung";
	   load_ciliwung_main();	 
	   document.getElementById("DetailText").innerHTML = "";	
	   document.getElementById("HeadDetailText").innerHTML = "Hasil Uji Sungai Ciliwung";	   
	   load_ciliwung_all();		   
	}
};
var showCibalok = document.getElementById("cibalok");
showCibalok.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupCibalok);
       this.className = '';
    } else {
       map.addLayer(groupCibalok);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Hasil Uji Sungai Cibalok";	
	   load_cibalok_main();	 	   
	   document.getElementById("DetailText").innerHTML = "";	
	   document.getElementById("HeadDetailText").innerHTML = "Hasil Uji Sungai Cibalok";	
	   load_cibalok_all();	 
	}
};
var showCiparigi = document.getElementById("ciparigi");
showCiparigi.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupCiparigi);
       this.className = '';
    } else {
       map.addLayer(groupCiparigi);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Hasil Uji Sungai Ciparigi";	
	   load_ciparigi_main();	
	   document.getElementById("DetailText").innerHTML = "";	
	   document.getElementById("HeadDetailText").innerHTML = "Hasil Uji Sungai Ciparigi";	   
	   load_ciparigi_all();	 	   
	}
};	
var showCiluar = document.getElementById("ciluar");
showCiluar.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupCiluar);
       this.className = '';
    } else {
       map.addLayer(groupCiluar);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Hasil Uji Sungai Ciluar";	   
	   load_ciluar_main();	 
	   document.getElementById("DetailText").innerHTML = "";	
	   document.getElementById("HeadDetailText").innerHTML = "Hasil Uji Sungai Ciluar";	   
	   load_ciluar_all();	   
	}
};
var showCisadane = document.getElementById("cisadane");
showCisadane.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupCisadane);
       this.className = '';
    } else {
       map.addLayer(groupCisadane);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Hasil Uji Sungai Cisadane";	
	   load_cisadane_main();	
	   document.getElementById("DetailText").innerHTML = "";	
	   document.getElementById("HeadDetailText").innerHTML = "Hasil Uji Sungai Cisadane";	   
	   load_cisadane_all();	
	}
};
var showCisindangbarang = document.getElementById("cisindangbarang");
showCisindangbarang.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupCisindangbarang);
       this.className = '';
    } else {
       map.addLayer(groupCisindangbarang);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Hasil Uji Sungai Cisindangbarang";
	   load_cisindangbarang_main();	 
	   document.getElementById("DetailText").innerHTML = "";	
	   document.getElementById("HeadDetailText").innerHTML = "Hasil Uji Sungai Cisindangbarang";	   
	   load_cisindangbarang_all();		   
	}
};
var showCipakancilan = document.getElementById("cipakancilan");
showCipakancilan.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupCipakancilan);
       this.className = '';
    } else {
       map.addLayer(groupCipakancilan);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Hasil Uji Sungai Cipakancilan";	   
	   load_cipakancilan_main();	 
	   document.getElementById("DetailText").innerHTML = "";	
	   document.getElementById("HeadDetailText").innerHTML = "Hasil Uji Sungai Cipakancilan";	   
	   load_cipakancilan_all();
	}
};
var showCianten = document.getElementById("cianten");
showCianten.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupCianten);
       this.className = '';
    } else {
       map.addLayer(groupCianten);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Hasil Uji Sungai Cianten";
	   load_cianten_main();	 
	   document.getElementById("DetailText").innerHTML = "";	
	   document.getElementById("HeadDetailText").innerHTML = "Hasil Uji Sungai Cianten";	   
	   load_cianten_all();	   
	}
};	
var showCidepit = document.getElementById("cidepit");
showCidepit.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupCidepit);
       this.className = '';
    } else {
       map.addLayer(groupCidepit);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Hasil Uji Sungai Cidepit";
	   load_cidepit_main();	 
	   document.getElementById("DetailText").innerHTML = "";	
	   document.getElementById("HeadDetailText").innerHTML = "Hasil Uji Sungai Cidepit";
	   load_cidepit_all();	 	   
	}
};
var showCikaret = document.getElementById("cikaret");
showCikaret.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupCikaret);
       this.className = '';
    } else {
       map.addLayer(groupCikaret);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Hasil Uji Sungai Cikaret";
	   load_cikaret();	 	   
	}
};

var showSumur = document.getElementById("sumur");
showSumur.onclick = function(e) {
    if (this.className=='active') {
		map.removeLayer(groupSumur);
		map.removeLayer(groupSumurSelatan);
		map.removeLayer(groupSumurUtara);
		map.removeLayer(groupSumurTengah);
		map.removeLayer(groupSumurTimur);
		map.removeLayer(groupSumurSareal);
		map.removeLayer(groupSumurBarat);		   
       this.className = '';
    } else {
	
		var e = document.getElementById("pilihKec");
		var k = e.options[e.selectedIndex].value; 
		
			//alert("Nilai k = " +k);				
			if (k == 'semua') {
				map.addLayer(groupSumur);
				k ='';
				}
			if (k == 'bosel')  {
				map.addLayer(groupSumurSelatan);
				k ='';
				}	
			if (k == 'bout')  {
				map.addLayer(groupSumurUtara);
				k ='';				
			} 
			if (k == 'boteng')  {
				map.addLayer(groupSumurTengah);
				k ='';				
			} 
			if (k == 'botim')  {
				map.addLayer(groupSumurTimur);
				k ='';				
			} 
			if (k == 'sareal')  {
				map.addLayer(groupSumurSareal);
				k ='';				
			} 	
			if (k == 'bobar')  {
				map.addLayer(groupSumurBarat);
				k ='';				
			} 			
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Uji Sumur";	
    }
};

var showSitu = document.getElementById("situ");
showSitu.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupSitu);
       this.className = '';
    } else {
       map.addLayer(groupSitu);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Hasil Uji Situ";	   
    }
};
var showSituGede = document.getElementById("situgede");
showSituGede.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupSituGede);
       this.className = '';
    } else {
       map.addLayer(groupSituGede);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Hasil Uji Situ Gede";	
	   load_situgede_main();	 
	   document.getElementById("DetailText").innerHTML = "";	
	   document.getElementById("HeadDetailText").innerHTML = "Hasil Uji Situ Gede";
	   load_situgede_all(); 
    }
};
var showSituPanjang = document.getElementById("situpanjang");
showSituPanjang.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupSituPanjang);
       this.className = '';
    } else {
       map.addLayer(groupSituPanjang);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Hasil Uji Situ Panjang";	
	   load_situpanjang_main();	 
	   document.getElementById("DetailText").innerHTML = "";	
	   document.getElementById("HeadDetailText").innerHTML = "Hasil Uji Situ Panjang";
	   load_situpanjang_all(); 	   
    }
};
var showSituAnggalena = document.getElementById("situanggalena");
showSituAnggalena.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupSituAnggalena);
       this.className = '';
    } else {
       map.addLayer(groupSituAnggalena);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Hasil Uji Situ Anggalena";
	   load_situanggalena_main();	 
	   document.getElementById("DetailText").innerHTML = "";	
	   document.getElementById("HeadDetailText").innerHTML = "Hasil Uji Situ Anggalena";
	   load_situanggalena_all(); 	   
    }
};

var showCerobong = document.getElementById("cerobong");
showCerobong.onclick = function(e) {
    if (this.className=='active') {
		map.removeLayer(groupCerobong);
		map.removeLayer(groupCerobongSelatan);
		map.removeLayer(groupCerobongUtara);
		map.removeLayer(groupCerobongTengah);
		map.removeLayer(groupCerobongTimur);
		map.removeLayer(groupCerobongSareal);
		map.removeLayer(groupCerobongBarat);		   
       this.className = '';
    } else {
	
		var e = document.getElementById("pilihKec");
		var k = e.options[e.selectedIndex].value; 
		
			//alert("Nilai k = " +k);				
			if (k == 'semua') {
				map.addLayer(groupCerobong);
				k ='';
				}
			if (k == 'bosel')  {
				map.addLayer(groupCerobongSelatan);
				k ='';
				}	
			if (k == 'bout')  {
				map.addLayer(groupCerobongUtara);
				k ='';				
			} 
			if (k == 'boteng')  {
				map.addLayer(groupCerobongTengah);
				k ='';				
			} 
			if (k == 'botim')  {
				map.addLayer(groupCerobongTimur);
				k ='';				
			} 
			if (k == 'sareal')  {
				map.addLayer(groupCerobongSareal);
				k ='';				
			} 	
			if (k == 'bobar')  {
				map.addLayer(groupCerobongBarat);
				k ='';				
			} 			
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Uji Cerobong";	
    }
};

var showAmbien = document.getElementById("ambien");
showAmbien.onclick = function(e) {
    if (this.className=='active') {
		map.removeLayer(groupAmbien);
		map.removeLayer(groupAmbienSelatan);
		map.removeLayer(groupAmbienUtara);
		map.removeLayer(groupAmbienTengah);
		map.removeLayer(groupAmbienTimur);
		map.removeLayer(groupAmbienSareal);
		map.removeLayer(groupAmbienBarat);		   
       this.className = '';
    } else {
	
		var e = document.getElementById("pilihKec");
		var k = e.options[e.selectedIndex].value; 
		
			//alert("Nilai k = " +k);				
			if (k == 'semua') {
				map.addLayer(groupAmbien);
				k ='';
				}
			if (k == 'bosel')  {
				map.addLayer(groupAmbienSelatan);
				k ='';
				}	
			if (k == 'bout')  {
				map.addLayer(groupAmbienUtara);
				k ='';				
			} 
			if (k == 'boteng')  {
				map.addLayer(groupAmbienTengah);
				k ='';				
			} 
			if (k == 'botim')  {
				map.addLayer(groupAmbienTimur);
				k ='';				
			} 
			if (k == 'sareal')  {
				map.addLayer(groupAmbienSareal);
				k ='';				
			} 	
			if (k == 'bobar')  {
				map.addLayer(groupAmbienBarat);
				k ='';				
			} 			
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Uji Ambien";	
    }
};

var showTanah = document.getElementById("tanah");
showTanah.onclick = function(e) {
    if (this.className=='active') {
		map.removeLayer(groupTanah);
		map.removeLayer(groupTanahSelatan);
		map.removeLayer(groupTanahUtara);
		map.removeLayer(groupTanahTengah);
		map.removeLayer(groupTanahTimur);
		map.removeLayer(groupTanahSareal);
		map.removeLayer(groupTanahBarat);		   
       this.className = '';
    } else {
	
		var e = document.getElementById("pilihKec");
		var k = e.options[e.selectedIndex].value; 
		
			//alert("Nilai k = " +k);				
			if (k == 'semua') {
				map.addLayer(groupTanah);
				k ='';
				}
			if (k == 'bosel')  {
				map.addLayer(groupTanahSelatan);
				k ='';
				}	
			if (k == 'bout')  {
				map.addLayer(groupTanahUtara);
				k ='';				
			} 
			if (k == 'boteng')  {
				map.addLayer(groupTanahTengah);
				k ='';				
			} 
			if (k == 'botim')  {
				map.addLayer(groupTanahTimur);
				k ='';				
			} 
			if (k == 'sareal')  {
				map.addLayer(groupTanahSareal);
				k ='';				
			} 	
			if (k == 'bobar')  {
				map.addLayer(groupTanahBarat);
				k ='';				
			} 			
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Uji Tanah";	
    }
};

var showBtiga = document.getElementById("btiga");
showBtiga.onclick = function(e) {
    if (this.className=='active') {
		map.removeLayer(groupBtiga);
		map.removeLayer(groupBtigaSelatan);
		map.removeLayer(groupBtigaUtara);
		map.removeLayer(groupBtigaTengah);
		map.removeLayer(groupBtigaTimur);
		map.removeLayer(groupBtigaSareal);
		map.removeLayer(groupBtigaBarat);		   
       this.className = '';
    } else {
	
		var e = document.getElementById("pilihKec");
		var k = e.options[e.selectedIndex].value; 
		
			//alert("Nilai k = " +k);				
			if (k == 'semua') {
				map.addLayer(groupBtiga);
				k ='';
				}
			if (k == 'bosel')  {
				map.addLayer(groupBtigaSelatan);
				k ='';
				}	
			if (k == 'bout')  {
				map.addLayer(groupBtigaUtara);
				k ='';				
			} 
			if (k == 'boteng')  {
				map.addLayer(groupBtigaTengah);
				k ='';				
			} 
			if (k == 'botim')  {
				map.addLayer(groupBtigaTimur);
				k ='';				
			} 
			if (k == 'sareal')  {
				map.addLayer(groupBtigaSareal);
				k ='';				
			} 	
			if (k == 'bobar')  {
				map.addLayer(groupBtigaBarat);
				k ='';				
			} 			
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Uji Limbah B3";	
    }
};

var showLimbahcair = document.getElementById("limbahcair");
showLimbahcair.onclick = function(e) {
    if (this.className=='active') {
		map.removeLayer(groupLimbahcair);
		map.removeLayer(groupLimbahcairSelatan);
		map.removeLayer(groupLimbahcairUtara);
		map.removeLayer(groupLimbahcairTengah);
		map.removeLayer(groupLimbahcairTimur);
		map.removeLayer(groupLimbahcairSareal);
		map.removeLayer(groupLimbahcairBarat);		   
       this.className = '';
    } else {
	
		var e = document.getElementById("pilihKec");
		var k = e.options[e.selectedIndex].value; 
		
			//alert("Nilai k = " +k);				
			if (k == 'semua') {
				map.addLayer(groupLimbahcair);
				k ='';
				}
			if (k == 'bosel')  {
				map.addLayer(groupLimbahcairSelatan);
				k ='';
				}	
			if (k == 'bout')  {
				map.addLayer(groupLimbahcairUtara);
				k ='';				
			} 
			if (k == 'boteng')  {
				map.addLayer(groupLimbahcairTengah);
				k ='';				
			} 
			if (k == 'botim')  {
				map.addLayer(groupLimbahcairTimur);
				k ='';				
			} 
			if (k == 'sareal')  {
				map.addLayer(groupLimbahcairSareal);
				k ='';				
			} 	
			if (k == 'bobar')  {
				map.addLayer(groupLimbahcairBarat);
				k ='';				
			} 			
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Uji Limbah Cair";	
    }
};

var showBiogas = document.getElementById("biogas");
showBiogas.onclick = function(e) {
    if (this.className=='active') {
		map.removeLayer(groupBiogas);
		map.removeLayer(groupBiogasSelatan);
		map.removeLayer(groupBiogasUtara);
		map.removeLayer(groupBiogasTengah);
		map.removeLayer(groupBiogasTimur);
		map.removeLayer(groupBiogasSareal);
		map.removeLayer(groupBiogasBarat);		   
       this.className = '';
    } else {
	
		var e = document.getElementById("pilihKec");
		var k = e.options[e.selectedIndex].value; 
		
			//alert("Nilai k = " +k);				
			if (k == 'semua') {
				map.addLayer(groupBiogas);
				k ='';
				}
			if (k == 'bosel')  {
				map.addLayer(groupBiogasSelatan);
				k ='';
				}	
			if (k == 'bout')  {
				map.addLayer(groupBiogasUtara);
				k ='';				
			} 
			if (k == 'boteng')  {
				map.addLayer(groupBiogasTengah);
				k ='';				
			} 
			if (k == 'botim')  {
				map.addLayer(groupBiogasTimur);
				k ='';				
			} 
			if (k == 'sareal')  {
				map.addLayer(groupBiogasSareal);
				k ='';				
			} 	
			if (k == 'bobar')  {
				map.addLayer(groupBiogasBarat);
				k ='';				
			} 			
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Uji Biogas";	
    }
};

var showMataair = document.getElementById("mataair");
showMataair.onclick = function(e) {
    if (this.className=='active') {
		map.removeLayer(groupMataair);
		map.removeLayer(groupMataairSelatan);
		map.removeLayer(groupMataairUtara);
		map.removeLayer(groupMataairTengah);
		map.removeLayer(groupMataairTimur);
		map.removeLayer(groupMataairSareal);
		map.removeLayer(groupMataairBarat);		   
       this.className = '';
    } else {
	
		var e = document.getElementById("pilihKec");
		var k = e.options[e.selectedIndex].value; 
		
			//alert("Nilai k = " +k);				
			if (k == 'semua') {
				map.addLayer(groupMataair);
				k ='';
				}
			if (k == 'bosel')  {
				map.addLayer(groupMataairSelatan);
				k ='';
				}	
			if (k == 'bout')  {
				map.addLayer(groupMataairUtara);
				k ='';				
			} 
			if (k == 'boteng')  {
				map.addLayer(groupMataairTengah);
				k ='';				
			} 
			if (k == 'botim')  {
				map.addLayer(groupMataairTimur);
				k ='';				
			} 
			if (k == 'sareal')  {
				map.addLayer(groupMataairSareal);
				k ='';				
			} 	
			if (k == 'bobar')  {
				map.addLayer(groupMataairBarat);
				k ='';				
			} 			
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Uji Mata Air";	
    }
};

var showAirtanah = document.getElementById("airtanah");
showAirtanah.onclick = function(e) {

    if (this.className=='active') {
		map.removeLayer(groupAirtanah);
		map.removeLayer(groupAirtanahSelatan);
		map.removeLayer(groupAirtanahUtara);
		map.removeLayer(groupAirtanahTengah);
		map.removeLayer(groupAirtanahTimur);
		map.removeLayer(groupAirtanahSareal);
		map.removeLayer(groupAirtanahBarat);		   
       this.className = '';
    } else {
	
		var e = document.getElementById("pilihKec");
		var k = e.options[e.selectedIndex].value; 
		
			//alert("Nilai k = " +k);				
			if (k == 'semua') {
				map.addLayer(groupAirtanah);
				k ='';
				}
			if (k == 'bosel')  {
				map.addLayer(groupAirtanahSelatan);
				k ='';
				}	
			if (k == 'bout')  {
				map.addLayer(groupAirtanahUtara);
				k ='';				
			} 
			if (k == 'boteng')  {
				map.addLayer(groupAirtanahTengah);
				k ='';				
			} 
			if (k == 'botim')  {
				map.addLayer(groupAirtanahTimur);
				k ='';				
			} 
			if (k == 'sareal')  {
				map.addLayer(groupAirtanahSareal);
				k ='';				
			} 	
			if (k == 'bobar')  {
				map.addLayer(groupAirtanahBarat);
				k ='';				
			} 			
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Perusahaan Pengguna Air Tanah";	
    }
};

var showPantau = document.getElementById("pantau");
showPantau.onclick = function(e) {
    if (this.className=='active') {
		map.removeLayer(groupPantau);
		map.removeLayer(groupPantauSelatan);
		map.removeLayer(groupPantauUtara);
		map.removeLayer(groupPantauTengah);
		map.removeLayer(groupPantauTimur);
		map.removeLayer(groupPantauSareal);
		map.removeLayer(groupPantauBarat);		   
       this.className = '';
    } else {
	
		var e = document.getElementById("pilihKec");
		var k = e.options[e.selectedIndex].value; 
		
			//alert("Nilai k = " +k);				
			if (k == 'semua') {
				map.addLayer(groupPantau);
				k ='';
				}
			if (k == 'bosel')  {
				map.addLayer(groupPantauSelatan);
				k ='';
				}	
			if (k == 'bout')  {
				map.addLayer(groupPantauUtara);
				k ='';				
			} 
			if (k == 'boteng')  {
				map.addLayer(groupPantauTengah);
				k ='';				
			} 
			if (k == 'botim')  {
				map.addLayer(groupPantauTimur);
				k ='';				
			} 
			if (k == 'sareal')  {
				map.addLayer(groupPantauSareal);
				k ='';				
			} 	
			if (k == 'bobar')  {
				map.addLayer(groupPantauBarat);
				k ='';				
			} 			
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Sumur Pantau";	
    }
};

var showResapan = document.getElementById("resapan");
showResapan.onclick = function(e) {
    if (this.className=='active') {
		map.removeLayer(groupResapan);
		map.removeLayer(groupResapanSelatan);
		map.removeLayer(groupResapanUtara);
		map.removeLayer(groupResapanTengah);
		map.removeLayer(groupResapanTimur);
		map.removeLayer(groupResapanSareal);
		map.removeLayer(groupResapanBarat);		   
       this.className = '';
    } else {
	
		var e = document.getElementById("pilihKec");
		var k = e.options[e.selectedIndex].value; 
		
			//alert("Nilai k = " +k);				
			if (k == 'semua') {
				map.addLayer(groupResapan);
				k ='';
				}
			if (k == 'bosel')  {
				map.addLayer(groupResapanSelatan);
				k ='';
				}	
			if (k == 'bout')  {
				map.addLayer(groupResapanUtara);
				k ='';				
			} 
			if (k == 'boteng')  {
				map.addLayer(groupResapanTengah);
				k ='';				
			} 
			if (k == 'botim')  {
				map.addLayer(groupResapanTimur);
				k ='';				
			} 
			if (k == 'sareal')  {
				map.addLayer(groupResapanSareal);
				k ='';				
			} 	
			if (k == 'bobar')  {
				map.addLayer(groupResapanBarat);
				k ='';				
			} 			
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Sumur Resapan";	
    }
};

var showImbuhan = document.getElementById("imbuhan");
showImbuhan.onclick = function(e) {
    if (this.className=='active') {
		map.removeLayer(groupImbuhan);
		map.removeLayer(groupImbuhanSelatan);
		map.removeLayer(groupImbuhanUtara);
		map.removeLayer(groupImbuhanTengah);
		map.removeLayer(groupImbuhanTimur);
		map.removeLayer(groupImbuhanSareal);
		map.removeLayer(groupImbuhanBarat);		   
       this.className = '';
    } else {
	
		var e = document.getElementById("pilihKec");
		var k = e.options[e.selectedIndex].value; 
		
			//alert("Nilai k = " +k);				
			if (k == 'semua') {
				map.addLayer(groupImbuhan);
				k ='';
				}
			if (k == 'bosel')  {
				map.addLayer(groupImbuhanSelatan);
				k ='';
				}	
			if (k == 'bout')  {
				map.addLayer(groupImbuhanUtara);
				k ='';				
			} 
			if (k == 'boteng')  {
				map.addLayer(groupImbuhanTengah);
				k ='';				
			} 
			if (k == 'botim')  {
				map.addLayer(groupImbuhanTimur);
				k ='';				
			} 
			if (k == 'sareal')  {
				map.addLayer(groupImbuhanSareal);
				k ='';				
			} 	
			if (k == 'bobar')  {
				map.addLayer(groupImbuhanBarat);
				k ='';				
			} 			
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Sumur Imbuhan";	
    }
};

var showHutankota = document.getElementById("hutankota");
showHutankota.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupHutankota);
       this.className = '';
    } else {
       map.addLayer(groupHutankota);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Hutan Kota";	   	 	   
    }
};
var showSehati = document.getElementById("sehati");
showSehati.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupSehati);
       this.className = '';
    } else {
       map.addLayer(groupSehati);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Sekolah Keanekaragaman Hayati";	   	 	   
    }
};
var showKehati = document.getElementById("kehati");
showKehati.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupKehati);
       this.className = '';
    } else {
       map.addLayer(groupKehati);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Kelurahan Keanekaragaman Hayati";	   	 	   
    }
};
var showPemerhati = document.getElementById("pemerhati");
showPemerhati.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupPemerhati);
       this.className = '';
    } else {
       map.addLayer(groupPemerhati);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Perusahaan Keanekaragaman Hayati";		   
    }
};
var showKegiatanusaha = document.getElementById("kegiatanusaha");
showKegiatanusaha.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupKegiatanusaha);
       this.className = '';
    } else {
       map.addLayer(groupKegiatanusaha);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Kegiatan Usaha";		   
    }
};
var showUkm = document.getElementById("ukm");
showUkm.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupUkm);
       this.className = '';
    } else {
       map.addLayer(groupUkm);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi UKM";		   
    }
};
var showAdipura = document.getElementById("adipura");
showAdipura.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupAdipura);
       this.className = '';
    } else {
       map.addLayer(groupAdipura);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Titik Pantau Adipura";		   
    }
};
var showAdiwiyata = document.getElementById("adiwiyata");
showAdiwiyata.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupAdiwiyata);
       this.className = '';
    } else {
       map.addLayer(groupAdiwiyata);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	   
	   document.getElementById("HeadBottomText").innerHTML = "Lokasi Sekolahan Penerima Penghargaan Adiwiyata";		   
    }
};	

//Zona Air Tanah
var showZatKotaBogor = document.getElementById("zat_kotabogor");
showZatKotaBogor.onclick = function(e) {
	if (this.className=='active') {
	   map.removeLayer(groupZatKotaBogor);
       this.className = '';
	} else {
       map.addLayer(groupZatKotaBogor);
       this.className = 'active';     
	   map.removeLayer(groupZatRusak);	   
	   var showZatRusak = document.getElementById("zat_rusak");	   
       showZatRusak.className = '';	
	   map.removeLayer(groupZatKritis);	   
	   var showZatKritis = document.getElementById("zat_kritis");	   
       showZatKritis.className = '';		   
	   map.removeLayer(groupZatRawan);	   
	   var showZatRawan = document.getElementById("zat_rawan");	   
       showZatRawan.className = '';	   
	   map.removeLayer(groupZatAman);	   
	   var showZatAman = document.getElementById("zat_aman");	   
       showZatAman.className = '';	

//	   hapusFilter();	   
	   map.removeLayer(groupFilterKotaBogor);
	   var showFilterKotaBogor = document.getElementById("kotabogor");
       showFilterKotaBogor.className = '';	 
	   map.removeLayer(groupFilterBogorUtara);	
	   var showFilterBogorUtara = document.getElementById("bogorutara");
       showFilterBogorUtara.className = '';	 
	   map.removeLayer(groupFilterBogorSelatan);	   
	   var showFilterBogorSelatan = document.getElementById("bogorselatan");	   
       showFilterBogorSelatan.className = '';	 	   
	   map.removeLayer(groupFilterBogorBarat);	   
	   var showFilterBogorBarat = document.getElementById("bogorbarat");	   
       showFilterBogorBarat.className = '';	
	   map.removeLayer(groupFilterBogorTimur);	   
	   var showFilterBogorTimur = document.getElementById("bogortimur");	   
       showFilterBogorTimur.className = '';	
	   map.removeLayer(groupFilterBogorTengah);	   
	   var showFilterBogorTengah = document.getElementById("bogortengah");	   
       showFilterBogorTengah.className = '';	
	   map.removeLayer(groupFilterTanahSareal);	   
	   var showFilterTanahSareal = document.getElementById("tanahsareal");	   
       showFilterTanahSareal.className = '';	
	   
	   document.getElementById("bottomText").innerHTML = "";	   
	   document.getElementById("HeadBottomText").innerHTML = "Peta Konservasi Air Tanah Kota Bogor Tahun 2011";
	   load_zat();	
	}   
};
var showZatRusak = document.getElementById("zat_rusak");
showZatRusak.onclick = function(e) {
	if (this.className=='active') {
	   map.removeLayer(groupZatRusak);
       this.className = '';
	} else {
       map.addLayer(groupZatRusak);
       this.className = 'active';   
	   map.removeLayer(groupZatKotaBogor);	   
	   var showZatKotaBogor = document.getElementById("zat_kotabogor");	   
       showZatKotaBogor.className = '';	
	   map.removeLayer(groupZatKritis);	   
	   var showZatKritis = document.getElementById("zat_kritis");	   
       showZatKritis.className = '';		   
	   map.removeLayer(groupZatRawan);	   
	   var showZatRawan = document.getElementById("zat_rawan");	   
       showZatRawan.className = '';	   
	   map.removeLayer(groupZatAman);	   
	   var showZatAman = document.getElementById("zat_aman");	   
       showZatAman.className = '';

//	   hapusFilter();	   
	   map.removeLayer(groupFilterKotaBogor);
	   var showFilterKotaBogor = document.getElementById("kotabogor");
       showFilterKotaBogor.className = '';	 
	   map.removeLayer(groupFilterBogorUtara);	
	   var showFilterBogorUtara = document.getElementById("bogorutara");
       showFilterBogorUtara.className = '';	 
	   map.removeLayer(groupFilterBogorSelatan);	   
	   var showFilterBogorSelatan = document.getElementById("bogorselatan");	   
       showFilterBogorSelatan.className = '';	 	   
	   map.removeLayer(groupFilterBogorBarat);	   
	   var showFilterBogorBarat = document.getElementById("bogorbarat");	   
       showFilterBogorBarat.className = '';	
	   map.removeLayer(groupFilterBogorTimur);	   
	   var showFilterBogorTimur = document.getElementById("bogortimur");	   
       showFilterBogorTimur.className = '';	
	   map.removeLayer(groupFilterBogorTengah);	   
	   var showFilterBogorTengah = document.getElementById("bogortengah");	   
       showFilterBogorTengah.className = '';	
	   map.removeLayer(groupFilterTanahSareal);	   
	   var showFilterTanahSareal = document.getElementById("tanahsareal");	   
       showFilterTanahSareal.className = '';	
	   
	   document.getElementById("bottomText").innerHTML = "";	   
	   document.getElementById("HeadBottomText").innerHTML = "Peta Zona Rusak - Konservasi Air Tanah Kota Bogor Tahun 2011";
	   load_zat();	  
	}   
};
var showZatKritis = document.getElementById("zat_kritis");
showZatKritis.onclick = function(e) {
	if (this.className=='active') {
	   map.removeLayer(groupZatKritis);
       this.className = '';
	} else {
       map.addLayer(groupZatKritis);
       this.className = 'active';   
	   map.removeLayer(groupZatKotaBogor);	   
	   var showZatKotaBogor = document.getElementById("zat_kotabogor");	   
       showZatKotaBogor.className = '';	
	   map.removeLayer(groupZatRusak);	   
	   var showZatRusak = document.getElementById("zat_rusak");	   
       showZatRusak.className = '';		   
	   map.removeLayer(groupZatRawan);	   
	   var showZatRawan = document.getElementById("zat_rawan");	   
       showZatRawan.className = '';	   
	   map.removeLayer(groupZatAman);	   
	   var showZatAman = document.getElementById("zat_aman");	   
       showZatAman.className = '';

//	   hapusFilter();	   
	   map.removeLayer(groupFilterKotaBogor);
	   var showFilterKotaBogor = document.getElementById("kotabogor");
       showFilterKotaBogor.className = '';	 
	   map.removeLayer(groupFilterBogorUtara);	
	   var showFilterBogorUtara = document.getElementById("bogorutara");
       showFilterBogorUtara.className = '';	 
	   map.removeLayer(groupFilterBogorSelatan);	   
	   var showFilterBogorSelatan = document.getElementById("bogorselatan");	   
       showFilterBogorSelatan.className = '';	 	   
	   map.removeLayer(groupFilterBogorBarat);	   
	   var showFilterBogorBarat = document.getElementById("bogorbarat");	   
       showFilterBogorBarat.className = '';	
	   map.removeLayer(groupFilterBogorTimur);	   
	   var showFilterBogorTimur = document.getElementById("bogortimur");	   
       showFilterBogorTimur.className = '';	
	   map.removeLayer(groupFilterBogorTengah);	   
	   var showFilterBogorTengah = document.getElementById("bogortengah");	   
       showFilterBogorTengah.className = '';	
	   map.removeLayer(groupFilterTanahSareal);	   
	   var showFilterTanahSareal = document.getElementById("tanahsareal");	   
       showFilterTanahSareal.className = '';	
	   
	   document.getElementById("bottomText").innerHTML = "";	   
	   document.getElementById("HeadBottomText").innerHTML = "Peta Zona Kritis - Konservasi Air Tanah Kota Bogor Tahun 2011";
	   load_zat();		   
	}   
};
var showZatRawan = document.getElementById("zat_rawan");
showZatRawan.onclick = function(e) {
	if (this.className=='active') {
	   map.removeLayer(groupZatRawan);
       this.className = '';
	} else {
       map.addLayer(groupZatRawan);
       this.className = 'active';
	   map.removeLayer(groupZatKotaBogor);	   
	   var showZatKotaBogor = document.getElementById("zat_kotabogor");	   
       showZatKotaBogor.className = '';	
	   map.removeLayer(groupZatKritis);	   
	   var showZatKritis = document.getElementById("zat_kritis");	   
       showZatKritis.className = '';		   
	   map.removeLayer(groupZatRusak);	   
	   var showZatRusak = document.getElementById("zat_rusak");	   
       showZatRusak.className = '';	   
	   map.removeLayer(groupZatAman);	   
	   var showZatAman = document.getElementById("zat_aman");	   
       showZatAman.className = ''; 
	   
//	   hapusFilter();	   
	   map.removeLayer(groupFilterKotaBogor);
	   var showFilterKotaBogor = document.getElementById("kotabogor");
       showFilterKotaBogor.className = '';	 
	   map.removeLayer(groupFilterBogorUtara);	
	   var showFilterBogorUtara = document.getElementById("bogorutara");
       showFilterBogorUtara.className = '';	 
	   map.removeLayer(groupFilterBogorSelatan);	   
	   var showFilterBogorSelatan = document.getElementById("bogorselatan");	   
       showFilterBogorSelatan.className = '';	 	   
	   map.removeLayer(groupFilterBogorBarat);	   
	   var showFilterBogorBarat = document.getElementById("bogorbarat");	   
       showFilterBogorBarat.className = '';	
	   map.removeLayer(groupFilterBogorTimur);	   
	   var showFilterBogorTimur = document.getElementById("bogortimur");	   
       showFilterBogorTimur.className = '';	
	   map.removeLayer(groupFilterBogorTengah);	   
	   var showFilterBogorTengah = document.getElementById("bogortengah");	   
       showFilterBogorTengah.className = '';	
	   map.removeLayer(groupFilterTanahSareal);	   
	   var showFilterTanahSareal = document.getElementById("tanahsareal");	   
       showFilterTanahSareal.className = '';	
	   
	   document.getElementById("bottomText").innerHTML = "";	   
	   document.getElementById("HeadBottomText").innerHTML = "Peta Zona Rawan - Konservasi Air Tanah Kota Bogor Tahun 2011";
	   load_zat();	
	}   
};
var showZatAman = document.getElementById("zat_aman");
showZatAman.onclick = function(e) {
	if (this.className=='active') {
	   map.removeLayer(groupZatAman);
       this.className = '';
	} else {
       map.addLayer(groupZatAman);
       this.className = 'active';
	   map.removeLayer(groupZatKotaBogor);	   
	   var showZatKotaBogor = document.getElementById("zat_kotabogor");	   
       showZatKotaBogor.className = '';	
	   map.removeLayer(groupZatKritis);	   
	   var showZatKritis = document.getElementById("zat_kritis");	   
       showZatKritis.className = '';		   
	   map.removeLayer(groupZatRawan);	   
	   var showZatRawan = document.getElementById("zat_rawan");	   
       showZatRawan.className = '';	   
	   map.removeLayer(groupZatRusak);	   
	   var showZatRusak = document.getElementById("zat_rusak");	   
       showZatRusak.className = '';	 
	   
//	   hapusFilter();	   
	   map.removeLayer(groupFilterKotaBogor);
	   var showFilterKotaBogor = document.getElementById("kotabogor");
       showFilterKotaBogor.className = '';	 
	   map.removeLayer(groupFilterBogorUtara);	
	   var showFilterBogorUtara = document.getElementById("bogorutara");
       showFilterBogorUtara.className = '';	 
	   map.removeLayer(groupFilterBogorSelatan);	   
	   var showFilterBogorSelatan = document.getElementById("bogorselatan");	   
       showFilterBogorSelatan.className = '';	 	   
	   map.removeLayer(groupFilterBogorBarat);	   
	   var showFilterBogorBarat = document.getElementById("bogorbarat");	   
       showFilterBogorBarat.className = '';	
	   map.removeLayer(groupFilterBogorTimur);	   
	   var showFilterBogorTimur = document.getElementById("bogortimur");	   
       showFilterBogorTimur.className = '';	
	   map.removeLayer(groupFilterBogorTengah);	   
	   var showFilterBogorTengah = document.getElementById("bogortengah");	   
       showFilterBogorTengah.className = '';	
	   map.removeLayer(groupFilterTanahSareal);	   
	   var showFilterTanahSareal = document.getElementById("tanahsareal");	   
       showFilterTanahSareal.className = '';	 

	   document.getElementById("bottomText").innerHTML = "";	   
	   document.getElementById("HeadBottomText").innerHTML = "Peta Zona Aman - Konservasi Air Tanah Kota Bogor Tahun 2011";
	   load_zat();	 
	}   
};

//Peta Dasar
var showBatasKecamatan = document.getElementById("bataskecamatan");
showBatasKecamatan.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupBatasKecamatan);
       this.className = '';
    } else {
       map.addLayer(groupBatasKecamatan);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	   
	   document.getElementById("HeadBottomText").innerHTML = "Batas Kecamatan";	   
    }
};	
var showBatasKelurahan = document.getElementById("bataskelurahan");
showBatasKelurahan.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupBatasKelurahan);
       this.className = '';
    } else {
       map.addLayer(groupBatasKelurahan);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	   
	   document.getElementById("HeadBottomText").innerHTML = "Batas Kelurahan";	   
    }
};
var showBadanJalan = document.getElementById("badanjalan");
showBadanJalan.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupBadanJalan);
       this.className = '';
    } else {
       map.addLayer(groupBadanJalan);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";	   
	   document.getElementById("HeadBottomText").innerHTML = "Badan Jalan";	   
    }
};	
var showSungaiBesar = document.getElementById("sungaibesar");
showSungaiBesar.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupSungaiBesar);
       this.className = '';
    } else {
       map.addLayer(groupSungaiBesar);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";		   
	   document.getElementById("HeadBottomText").innerHTML = "Data Sungai Besar";	   
    }
};
var showSungaiKecil = document.getElementById("sungaikecil");
showSungaiKecil.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupSungaiKecil);
       this.className = '';
    } else {
       map.addLayer(groupSungaiKecil);
       this.className = 'active';
	   document.getElementById("bottomText").innerHTML = "";		   
	   document.getElementById("HeadBottomText").innerHTML = "Data Sungai Kecil";	   
    }
};		
var showRTRW = document.getElementById("rtrw");
showRTRW.onclick = function(e) {
    if (this.className=='active') {
       map.removeLayer(groupRTRW);
       this.className = '';
    } else {
       map.addLayer(groupRTRW);
       this.className = 'active'; 
	   document.getElementById("bottomText").innerHTML = "";		   
	   document.getElementById("HeadBottomText").innerHTML = "Data Rencana Tata Ruang Wilayah";
	   load_rtrw();
	   
    }
};		


//Filter Peta
var groupFilterKotaBogor = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/filter/kotabogor.geojson').addTo(groupFilterKotaBogor);
var groupFilterBogorUtara = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/filter/kabbogor_bogorutara.geojson').addTo(groupFilterBogorUtara);
var groupFilterBogorSelatan = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/filter/kabbogor_bogorselatan.geojson').addTo(groupFilterBogorSelatan);
var groupFilterBogorBarat = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/filter/kabbogor_bogorbarat.geojson').addTo(groupFilterBogorBarat);
var groupFilterBogorTimur = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/filter/kabbogor_bogortimur.geojson').addTo(groupFilterBogorTimur);
var groupFilterBogorTengah = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/filter/kabbogor_bogortengah.geojson').addTo(groupFilterBogorTengah);
var groupFilterTanahSareal = new L.LayerGroup();
		L.mapbox.featureLayer()
		.loadURL('geojson/filter/kabbogor_tanahsareal.geojson').addTo(groupFilterTanahSareal);	
		
//Show Hide Filter Peta 
var showFilterKotaBogor = document.getElementById("kotabogor");
showFilterKotaBogor.onclick = function(e) {
	if (this.className=='active') {
	   map.removeLayer(groupFilterKotaBogor);
       this.className = '';
	} else {
	   document.getElementById("pilihKec").value = 'semua';
       map.addLayer(groupFilterKotaBogor);
       showFilterKotaBogor.className = 'active';
	   map.removeLayer(groupFilterBogorUtara);	
	   var showFilterBogorUtara = document.getElementById("bogorutara");
       showFilterBogorUtara.className = '';	 
	   map.removeLayer(groupFilterBogorSelatan);	   
	   var showFilterBogorSelatan = document.getElementById("bogorselatan");	   
       showFilterBogorSelatan.className = '';	 	   
	   map.removeLayer(groupFilterBogorBarat);	   
	   var showFilterBogorBarat = document.getElementById("bogorbarat");	   
       showFilterBogorBarat.className = '';	
	   map.removeLayer(groupFilterBogorTimur);	   
	   var showFilterBogorTimur = document.getElementById("bogortimur");	   
       showFilterBogorTimur.className = '';	
	   map.removeLayer(groupFilterBogorTengah);	   
	   var showFilterBogorTengah = document.getElementById("bogortengah");	   
       showFilterBogorTengah.className = '';	
	   map.removeLayer(groupFilterTanahSareal);	   
	   var showFilterTanahSareal = document.getElementById("tanahsareal");	   
       showFilterTanahSareal.className = '';	
	}	
};

var showFilterBogorUtara = document.getElementById("bogorutara");
showFilterBogorUtara.onclick = function(e) {
	if (this.className=='active') {
	   map.removeLayer(groupFilterBogorUtara);
       this.className = '';
	} else {
	   document.getElementById("pilihKec").value = 'bout';	
       map.addLayer(groupFilterBogorUtara);
       this.className = 'active';
	   map.removeLayer(groupFilterKotaBogor);
	   var showFilterKotaBogor = document.getElementById("kotabogor");
       showFilterKotaBogor.className = '';	 
	   map.removeLayer(groupFilterBogorSelatan);
	   var showFilterBogorSelatan = document.getElementById("bogorselatan");	   
       showFilterBogorSelatan.className = '';	 	   
	   map.removeLayer(groupFilterBogorBarat);
	   var showFilterBogorBarat = document.getElementById("bogorbarat");	   
       showFilterBogorBarat.className = '';	
	   map.removeLayer(groupFilterBogorTimur);
	   var showFilterBogorTimur = document.getElementById("bogortimur");	   
       showFilterBogorTimur.className = '';	
	   map.removeLayer(groupFilterBogorTengah);
	   var showFilterBogorTengah = document.getElementById("bogortengah");	   
       showFilterBogorTengah.className = '';	
	   map.removeLayer(groupFilterTanahSareal);
	   var showFilterTanahSareal = document.getElementById("tanahsareal");	   
       showFilterTanahSareal.className = '';
	}   
};

var showFilterBogorSelatan = document.getElementById("bogorselatan");
showFilterBogorSelatan.onclick = function(e) {
	if (this.className=='active') {
	   map.removeLayer(groupFilterBogorSelatan);
       this.className = '';
	} else {
	   document.getElementById("pilihKec").value = 'bosel';	
       map.addLayer(groupFilterBogorSelatan);
       this.className = 'active';
	   map.removeLayer(groupFilterKotaBogor);
	   var showFilterKotaBogor = document.getElementById("kotabogor");
       showFilterKotaBogor.className = '';	 
	   map.removeLayer(groupFilterBogorUtara);
	   var showFilterBogorUtara = document.getElementById("bogorutara");	   
       showFilterBogorUtara.className = '';	 	   
	   map.removeLayer(groupFilterBogorBarat);
	   var showFilterBogorBarat = document.getElementById("bogorbarat");	   
       showFilterBogorBarat.className = '';	
	   map.removeLayer(groupFilterBogorTimur);
	   var showFilterBogorTimur = document.getElementById("bogortimur");	   
       showFilterBogorTimur.className = '';	
	   map.removeLayer(groupFilterBogorTengah);
	   var showFilterBogorTengah = document.getElementById("bogortengah");	   
       showFilterBogorTengah.className = '';	
	   map.removeLayer(groupFilterTanahSareal);
	   var showFilterTanahSareal = document.getElementById("tanahsareal");	   
       showFilterTanahSareal.className = '';
	}   
};
var showFilterBogorBarat = document.getElementById("bogorbarat");
showFilterBogorBarat.onclick = function(e) {
	if (this.className=='active') {
	   map.removeLayer(groupFilterBogorBarat);
       this.className = '';
	} else {
	   document.getElementById("pilihKec").value = 'bobar';	
       map.addLayer(groupFilterBogorBarat);
       this.className = 'active';
	   map.removeLayer(groupFilterKotaBogor);
	   var showFilterKotaBogor = document.getElementById("kotabogor");
       showFilterKotaBogor.className = '';	 
	   map.removeLayer(groupFilterBogorSelatan);
	   var showFilterBogorSelatan = document.getElementById("bogorselatan");	   
       showFilterBogorSelatan.className = '';	 	   
	   map.removeLayer(groupFilterBogorUtara);
	   var showFilterBogorUtara = document.getElementById("bogorutara");	   
       showFilterBogorUtara.className = '';	
	   map.removeLayer(groupFilterBogorTimur);
	   var showFilterBogorTimur = document.getElementById("bogortimur");	   
       showFilterBogorTimur.className = '';	
	   map.removeLayer(groupFilterBogorTengah);
	   var showFilterBogorTengah = document.getElementById("bogortengah");	   
       showFilterBogorTengah.className = '';	
	   map.removeLayer(groupFilterTanahSareal);
	   var showFilterTanahSareal = document.getElementById("tanahsareal");	   
       showFilterTanahSareal.className = '';
	}   
};
var showFilterBogorTimur = document.getElementById("bogortimur");
showFilterBogorTimur.onclick = function(e) {
	if (this.className=='active') {
	   map.removeLayer(groupFilterBogorTimur);
       this.className = '';
	} else {
	   document.getElementById("pilihKec").value = 'botim';	
       map.addLayer(groupFilterBogorTimur);
       this.className = 'active';
	   map.removeLayer(groupFilterKotaBogor);
	   var showFilterKotaBogor = document.getElementById("kotabogor");
       showFilterKotaBogor.className = '';	 
	   map.removeLayer(groupFilterBogorSelatan);
	   var showFilterBogorSelatan = document.getElementById("bogorselatan");	   
       showFilterBogorSelatan.className = '';	 	   
	   map.removeLayer(groupFilterBogorBarat);
	   var showFilterBogorBarat = document.getElementById("bogorbarat");	   
       showFilterBogorBarat.className = '';	
	   map.removeLayer(groupFilterBogorUtara);
	   var showFilterBogorUtara = document.getElementById("bogorutara");	   
       showFilterBogorUtara.className = '';	
	   map.removeLayer(groupFilterBogorTengah);
	   var showFilterBogorTengah = document.getElementById("bogortengah");	   
       showFilterBogorTengah.className = '';	
	   map.removeLayer(groupFilterTanahSareal);
	   var showFilterTanahSareal = document.getElementById("tanahsareal");	   
       showFilterTanahSareal.className = '';
	}   
};
var showFilterBogorTengah = document.getElementById("bogortengah");
showFilterBogorTengah.onclick = function(e) {
	if (this.className=='active') {
	   map.removeLayer(groupFilterBogorTengah);
       this.className = '';
	} else {
	   document.getElementById("pilihKec").value = 'boteng';	
       map.addLayer(groupFilterBogorTengah);
       this.className = 'active';
	   map.removeLayer(groupFilterKotaBogor);
	   var showFilterKotaBogor = document.getElementById("kotabogor");
       showFilterKotaBogor.className = '';	 
	   map.removeLayer(groupFilterBogorSelatan);
	   var showFilterBogorSelatan = document.getElementById("bogorselatan");	   
       showFilterBogorSelatan.className = '';	 	   
	   map.removeLayer(groupFilterBogorBarat);
	   var showFilterBogorBarat = document.getElementById("bogorbarat");	   
       showFilterBogorBarat.className = '';	
	   map.removeLayer(groupFilterBogorTimur);
	   var showFilterBogorTimur = document.getElementById("bogortimur");	   
       showFilterBogorTimur.className = '';	
	   map.removeLayer(groupFilterBogorUtara);
	   var showFilterBogorUtara = document.getElementById("bogorutara");	   
       showFilterBogorUtara.className = '';	
	   map.removeLayer(groupFilterTanahSareal);
	   var showFilterTanahSareal = document.getElementById("tanahsareal");	   
       showFilterTanahSareal.className = '';
	}   
};
var showFilterTanahSareal = document.getElementById("tanahsareal");
showFilterTanahSareal.onclick = function(e) {
	if (this.className=='active') {
	   map.removeLayer(groupFilterTanahSareal);
       this.className = '';
	} else {
	   document.getElementById("pilihKec").value = 'sareal';	
       map.addLayer(groupFilterTanahSareal);
       this.className = 'active';
	   map.removeLayer(groupFilterKotaBogor);
	   var showFilterKotaBogor = document.getElementById("kotabogor");
       showFilterKotaBogor.className = '';	 
	   map.removeLayer(groupFilterBogorSelatan);
	   var showFilterBogorSelatan = document.getElementById("bogorselatan");	   
       showFilterBogorSelatan.className = '';	 	   
	   map.removeLayer(groupFilterBogorBarat);
	   var showFilterBogorBarat = document.getElementById("bogorbarat");	   
       showFilterBogorBarat.className = '';	
	   map.removeLayer(groupFilterBogorTimur);
	   var showFilterBogorTimur = document.getElementById("bogortimur");	   
       showFilterBogorTimur.className = '';	
	   map.removeLayer(groupFilterBogorTengah);
	   var showFilterBogorTengah = document.getElementById("bogortengah");	   
       showFilterBogorTengah.className = '';	
	   map.removeLayer(groupFilterBogorUtara);
	   var showFilterBogorUtara = document.getElementById("bogorutara");	   
       showFilterBogorUtara.className = '';  
	}   
    
};
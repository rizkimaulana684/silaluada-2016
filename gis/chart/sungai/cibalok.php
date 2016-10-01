<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Hasil Uji Sungai Cibalok Hulu</title>

		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script> 
		
		
		<style type="text/css">${demo.css}	</style> 
		<script type="text/javascript">
$(function () {
    $('#cibalok_hulu1').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'HASIL UJI AIR SUNGAI CIBALOK HULU 1, TAHUN 2010 sd 2014'
        },
        subtitle: {
            text: 'Parameter Uji: Temperatur, TDS, TSS, Debit, PH, BOD, COD, DO, NO2, Total Colifrom'
        },
        xAxis: {
            categories: ['2010-I', '2010-II', '2011-I', '2011-II', '2012-I', '2012-II', '2013-I', '2013-II', '2014-I', '2014-II', '2015-I', '2015-II']
        },
       legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },		
		
		
        yAxis: {
            title: {
                text: 'Hasil Pengujian'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
       series: [{
            name: 'Temperatur',
            data: [24.5,24.5,24.5,24,26.2,24,27.70,27.70,26.6,27.9]
        }, {
			name: 'TDS',
			data: [79,79,96,102,104,102,113,113,112,26]
        }, {
			name: 'TSS',
			data: [24,24,46,52,35,52,6,6,34,44]
        }, {
			name: 'Debit',
			data: [0.669,0.669,0.38,0.95,1.38,1.18,,,0.06,0.84]
        }, {
			name: 'pH',
			data: [6.8,6.8,6.8,6.8,5.4,6.8,7.9,7.9,7.2,7.8]			
        }, {
			name: 'BOD',
			data: [2.1,2.1,2.6,2.4,2.7,2.4,1.9,1.9,12,3]					
		}, {
			name: 'COD',
			data: [4.9,4.9,5.6,5.8,8.6,5.8,5.65,5.65,22,6]		
		}, {	
			name: 'DO',
			data: [7.4,7.4,6.5,6.4,5.2,4.9,1.10,1.10,4,4]
		}, {
			name: 'Total Coliform (ribuan)',
			data: [18,18,4.8,4.1,3.8,68,2.4,2.4,1.8,8]
		}, {
			name: 'H2S',
			data:  [13.1,13.1,0.04,0.04,,0.04,0.0134,0.0134,0.001,0.001]			
		}
		]
    });
});
		</script>
				<script type="text/javascript">
$(function () {
    $('#cibalok_hulu2').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'HASIL UJI AIR SUNGAI CIBALOK HULU 2, TAHUN 2010 sd 2014'
        },
        subtitle: {
            text: 'Parameter Uji: B, CD, Cr6, Cu, Pb, Zn, CN, F, NO3, PO4, Phenol'
        },
        xAxis: {
            categories: ['2010-I', '2010-II', '2011-I', '2011-II', '2012-I', '2012-II', '2013-I', '2013-II', '2014-I', '2014-II', '2015-I', '2015-II']
        },
        yAxis: {
            title: {
                text: 'Hasil Pengujian'
            }
        },
		
       legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },			
		
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
		 series: [{
			name: 'NO3',
			data: [0.07,0.07,0.87,0.92,0.068,0.92,,,1,0.4]
		 }, {
			name: 'B',
			data: [0.05,0.05,0.09,0.07,0.06,0.07,0.099,0.099,0.202,0.1]
		}, {
			name: 'Cd',
			data: [0.099,0.099,0.099,0.099,0.099,0.099,0.0010,0.0010,0.002,0.002]
		}, {
			name: 'Cr6',
			data: [0.001,0.001,0.001,0.001,0.003,0.001,0.0030,0.0030,0.001,0.01]
		}, {
			name: 'Cu',
			data: [0.003,0.003,0.003,0.003,0.003,0.003,0.0082,0.0082,0.006,0.006]
		}, {
			name: 'Pb',
			data: [0.004,0.004,0.004,0.004,0.005,0.004,0.0136,0.0136,0.007,0.007]
		}, {
			name: 'Zn',
			data: [0.003,0.003,0.041,0.052,0.001,0.052,0.0054,0.0054,0.004,0.004]
		}, {
			name: 'CN',
			data: [0.002,0.002,0.002,0.002,0.002,0.002,0.004,0.004,0.01,0.002]
		}, {
			name: 'F',
			data:  [0.206,0.206,0.05,0.05,0.115,0.05,0.1418,0.1418,0.02,0.1]
		}, {
			name: 'NO2',
			data:  [0.002,0.002,0.002,0.002,0.002,0.002,0.0796,0.0796,0.01,0.02]
		}, {
			name: 'PO4',
			data: [0.037,0.037,0.027,0.028,0.068,0.028,0.75,0.75,0.04,0.04]
		}, {
			name: 'Phenol',
			data: [0.002,0.002,0.008,0.001,0.002,0.001,0.29,0.29,0.99,0.99]
		}
		]
	});
});
		
		</script>
		
		
		
		<script type="text/javascript">
$(function () {
    $('#cibalok_tengah1').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'HASIL UJI AIR SUNGAI CIBALOK TENGAH 1, TAHUN 2010 sd 2014'
        },
        subtitle: {
            text: 'Parameter Uji: Temperatur, TDS, TSS, Debit, PH, BOD, COD, DO, H2S, Oil & Fat'
        },
        xAxis: {
            categories: ['2010-I', '2010-II', '2011-I', '2011-II', '2012-I', '2012-II', '2013-I', '2013-II', '2014-I', '2014-II', '2015-I', '2015-II']
        },
        yAxis: {
            title: {
                text: 'Hasil Pengujian'
            }
        },

       legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },			
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
        series: [{
			name: 'Temperatur',
			data: [25.2,25.2,26.3,25.3,27.5,25.3,27.30,27.30,26.6,27.5]	
		}, {
			name: 'TDS',
            data: [140,140,234,120,164,120,167,167,350,62]
		}, {
			name: 'TTS',
            data: [50,50,24,30,12,30,15,15,46,42]
		}, {
			name: 'Debit',
            data: [0.241,0.241,0.268,1.102,0.77,1.51,,,2.10,3.14]
		}, {
			name: 'pH',
            data: [7.3,7.3,7.3,7,6,6.25,7.9,7.9,7.4,7.6]
		}, {
			name: 'BOD',
            data: [3.4,3.4,5.8,3.8,7.6,3.8,1.9,1.9,11,6]
		}, {
			name: 'COD',
            data: [8.5,8.5,12.6,12.4,18,12.4,13.04,13.04,21,14]
		}, {
			name: 'DO',
            data: [6.2,6.2,4.8,6.7,3.4,4.8,1.10,1.10,4,4]
		}, {
			name: 'Oil&fat',
            data: [0.99,0.99,0.4,0.32,0.99,0.32,2.8,2.8,9,9]
			
		}
		]
    });
});
		
		</script>
				<script type="text/javascript">
$(function () {
    $('#cibalok_tengah2').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'HASIL UJI AIR SUNGAI CIBALOK TENGAH 2, TAHUN 2010 sd 2014'
        },
        subtitle: {
            text: 'Parameter Uji: PO4, NO3, B, Cd, Cr6, Cu, Pb, Zn, CN, F, NO2, Phenol'
        },
        xAxis: {
            categories: ['2010-I', '2010-II', '2011-I', '2011-II', '2012-I', '2012-II', '2013-I', '2013-II', '2014-I', '2014-II', '2015-I', '2015-II']
        },
       legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },			
        yAxis: {
            title: {
                text: 'Hasil Pengujian'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
        series: [{
			name: 'PO4',
            data: [0.133,0.133,0.043,0.033,0.511,0.033,0.46,0.46,0.01,0.04]
		}, {
			name: 'NO3',
            data: [0.06,0.06,0.52,0.62,0.511,0.62,,,0.4,1]
		}, {
			name: 'B',
            data: [0.05,0.05,0.11,0.09,0.05,0.09,0.99,0.99,0.3,0.1]
		}, {
			name: 'Cd',
            data: [0.099,0.099,0.099,0.099,0.099,0.099,0.0010,0.0010,0.002,0.002]
		}, {
			name: 'Cr6',
            data: [0.001,0.001,0.001,0.001,0.003,0.001,0.0010,0.0010,0.001,0.01]
		}, {
			name: 'Cu',
            data: [0.003,0.003,0.003,0.003,0.003,0.003,0.0082,0.0082,0.006,0.006]
		}, {
			name: 'Pb',
            data: [0.004,0.004,0004,0.004,0.005,0.004,0.0136,0.0136,0.007,0.007]
		}, {
			name: 'Zn',
            data: [0.02,0.02,0.081,0.092,0.001,0.092,0.0054,0.0054,0.004,0.004]
		}, {
			name: 'CN',
            data: [0.002,0.002,0.002,0.002,0.002,0.002,0.007,0.007,0.001,0.001]
		}, {
			name: 'F',
            data: [0.194,0.194,0.28,42,1.49,0.198,0.1418,0.1418,0.1,0.2]
		}, {
			name: 'NO2',
            data: [0.008,0.008,0.002,,0.002,0.002,0.4032,0.4032,0.01,0.02]
		}, {
			name: 'Phenol',
            data:[0.002,0.002,0.002,0.002,0.002,0.002,0.16,0.16,0.99,0.99]
		}
		]
    });
});
		
		</script>
		
		<script type="text/javascript">
$(function () {
    $('#cibalok_hilir1').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'HASIL UJI AIR SUNGAI CIBALOK HILIR 1, TAHUN 2010 sd 2014'
        },
        subtitle: {
            text: 'Parameter Uji: Temperatur, TDS, TSS, Debit, pH, BOD, COD, DO, Total Colifrom '
        },
        xAxis: {
            categories: ['2010-I', '2010-II', '2011-I', '2011-II', '2012-I', '2012-II', '2013-I', '2013-II', '2014-I', '2014-II', '2015-I', '2015-II']
        },
       legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },			
        yAxis: {
            title: {
                text: 'Hasil Pengujian'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
        series: [{
			name: 'temperatur',
            data: [25.9,25.9,26.6,27.2,27.7,27.2,27.30,27.30,28.3,27]
		}, {
			name: 'TDS (ratusan)',
            data: [127,127,176,145,156,145,201,201,160,80]
		}, {
			name: 'TSS',
            data: [16,16,37,36,40,36,4,4,64,30]
		}, {
			name: 'Debit',
            data:  [1.076,1.076,0.602,2.578,0.24,3.74,,,0.83,0.9]
		}, {
			name: 'pH',
            data: [7.4,7.4,7.1,6.7,6.1,6.56,7.6,7.6,7.0,7.5]
		}, {
			name: 'BOD',
            data: [3.6,3.6,6.8,6.6,7.8,6.6,3.00,3.00,8,6]
		}, {
			name: 'COD',
            data: [9.2,9.2,15,16.2,19.4,23,23,14,12]
		}, {
			name: 'DO',
            data: [6,6,3.6,6.6,4.8,4.5,1.00,1.00,4,4]
		}, {
			name: 'H2S',
            data: [13.2,13.2,0.03,0.03,,0.03,0.0252,0.0252,0.001,0.001]
		}, {
			name: 'MBAS',
            data:[0.083,0.083,0.306,0.124,0.232,0.124,1.5754,1.5754,155,69]	
		}, {
			name: 'Oil & fat',
            data:[0.99,0.99,0.6,0.4,0.99,0.4,4.0,4.0,9,9]
			}, {
			name: 'Total Colifrom (ribuan)',
            data: [47,47,14,27,38,26,1.9,1.9,1.3,1.4]
		}
		]
    });
});
		</script>
				
		<script type="text/javascript">
$(function () {
    $('#cibalok_hilir2').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'HASIL UJI AIR SUNGAI CIBALOK HILIR 2, TAHUN 2010 sd 2014'
        },
        subtitle: {
            text: 'Parameter Uji: PO4, NO3, B, Cd, Cr6, Cu, Pb, Zn, CN, F, NO2, phenol'
        },
        xAxis: {
            categories: ['2010-I', '2010-II', '2011-I', '2011-II', '2012-I', '2012-II', '2013-I', '2013-II', '2014-I', '2014-II', '2015-I', '2015-II']
        },
       legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },			
        yAxis: {
            title: {
                text: 'Hasil Pengujian'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
        series: [{
			name: 'PO4',
            data: [0.071,0.071,0.08,0.089,2.79,0.089,0.47,0.47,0.02,0.02]
		}, {
			name: 'NO3',
            data: [0.06,0.06,0.32,0.34,2.79,0.34,,,0.4,1]
		}, {
			name: 'B',
            data: [0.05,0.05,0.05,0.05,0.05,0.05,0.99,0.99,0.1,0.1]
		}, {
			name: 'Cd',
            data: [0.099,0.099,0.099,0.099,0.099,0.099,0.0130,0.0130,0.002,0.002]
		}, {
			name: 'Cr6',
            data: [0.001,0.001,0.001,0.001,0.003,0.001,0.0030,0.0030,0.001,0.01]
		}, {
			name: 'Cu',
            data: [0.003,0.003,0.003,0.003,0.003,0.003,0.0082,0.0082,0.006,0.006]
		}, {
			name: 'Pb',
            data: [0.004,0.004,0.004,0.004,0.005,0.004,0.0136,0.0136,0.007,0.007]
		}, {
			name: 'Zn',
            data: [0.009,0.009,0.008,0.005,0.001,0.005,0.0056,0.0056,0.004,0.004]
		}, {
			name: 'CN',
            data: [0.002,0.002,0.002,0.002,0.002,0.002,0.004,0.004,0.01,0.001]
		}, {
			name: 'F',
            data: [0.111,0.111,0.15,0.05,0.05,0.05,0.1418,0.1418,0.4,0.1]
		}, {
			name: 'NO2',
            data: [0.057,0.057,0.07,0.07,0.002,0.07,0.3733,0.3733,0.01,0.02]
		}, {
			name: 'Phenol',
            data: [0.002,0.002,0.008,0.004,0.002,0.004,0.21,0.21,0.9,0.9]
		}
		]
    });
});
		</script>
		
		
	</head>
	<body>
	
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>
<!--
<script src="js/highcharts.js"></script>
<script src="js/modules/exporting.js"></script>
<script src="js/modules/data.js"></script>
-->
<div id="cibalok_hulu1" style="min-width: 310px; height: 500px; margin: 0 auto"></div>
<br>
<div id="cibalok_hulu2" style="min-width: 310px; height: 500px; margin: 0 auto"></div>
<br>
<div id="cibalok_tengah1" style="min-width: 310px; height: 500px; margin: 0 auto"></div>
<br>
<div id="cibalok_tengah2" style="min-width: 310px; height: 500px; margin: 0 auto"></div>
<br>
<div id="cibalok_hilir1" style="min-width: 310px; height: 500px; margin: 0 auto"></div>
<br>
<div id="cibalok_hilir2" style="min-width: 310px; height: 500px; margin: 0 auto"></div>
<br>
	</body>
</html>

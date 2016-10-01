<?php
/**
* Author Tri Wanda
* Edit By Rizki Maulana
*/
class Adm_mata_air extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('m_global');
		$this->load->model('supermodel');
		if($this->session->userdata('getLoginAct')==FALSE) {
			$this->session->set_flashdata('error', 'Tidak ada akses untuk ini!!!');
			redirect('loginweb');
		}
	}

	function index()
	{
		$data['title'] = "Data Upaya konservasi Mata Air";
		$data['konten'] = 'admin/konservasi/mata_air/index';
		$link = 'adm_mata_air/index/';
		$limit= 10;
		$uri_segment= 3;
		$offset= $this->uri->segment($uri_segment);
		$jum = $this->supermodel->getData('mata_air');
		$data['tgl1'] = '';
		$data['tgl2'] = '';
		$data['listview'] = $this->supermodel->getData('mata_air',$field='', $order='tahun_pengamatan', $dasc='DESC', $limit, $offset);
		$this->supermodel->paging($link,$jum,$limit,$uri_segment);
		$data['offset'] = $offset;
		$this->load->vars($data);
		$this->load->view('admin/template');
	}

	function tambah()
	{
		$this->form_validation->set_rules('tahun_pengamatan','Tahun Pengamatan','required');
		$this->form_validation->set_rules('alamat','Alamat','required');
		if($this->form_validation->run()===TRUE) {
			$in['tahun_pengamatan'] = $this->input->post('tahun_pengamatan');
			$in['alamat'] = $this->input->post('alamat');
			
			$in['lat'] = $this->input->post('lat');
			$in['lng'] = $this->input->post('lng');
			$in['kelurahan_id'] = $this->input->post('kelurahan');
			$in['marker-color'] = $this->input->post('marker-color');
			$in['marker-size'] = $this->input->post('marker-size');
			$in['description'] = $this->input->post('keterangan');
			$in['marker-symbol'] = $this->input->post('icon');
			//$in['kelurahan_nama'] = $this->input->post('kelurahan_nama');
			//$in['kecamatan_nama'] = $this->input->post('kecamatan_nama');	
			$kecamatan = $this->supermodel->getData('kecamatan',array('kecamatan_id'=>$this->input->post('kecamatan')));
			$kelurahan = $this->supermodel->getData('kelurahan',array('kelurahan_id'=>$this->input->post('kelurahan')));	
			
			$keca = $kecamatan->row_array();
			$kelu = $kelurahan->row_array();

			//$in['kecamatan'] = $keca['kecamatan_nama'];
			//$in['kelurahan'] = $kelu['kelurahan_nama'];
			$in['icon_map'] = "icon-mata_air.png";
			if($_FILES['foto']['name']) {
				$ext = end(explode(".", $_FILES['foto']['name']));
				$rand = rand(000,999);
				$name = "mata_air-".$rand.'.'.$ext;
				$unggah = $this->supermodel->unggah_gambar('ragamdata/konservasi/mata_air/','foto',$name,true);
				if($unggah===false) {
					$this->session->set_flashdata('error', 'Upload gagal!!');
					redirect('adm_mata_air/tambah');
				}
				$in['foto'] = $name;
			}
			$this->supermodel->insertData('mata_air',$in);
			$this->session->set_flashdata('success', 'Penyimpanan data sukses');
			$this->m_global->activities('Menyimpan data konservasi Mata Air '.$in['mata_air_id']);
			redirect('adm_mata_air/tambah');
		}
		$data['title'] = "Tambah Data konservasi Mata Air";
		$data['icon'] = $this->supermodel->getData('icon');
		$data['konten'] = 'admin/konservasi/mata_air/tambah';
		$data['kecamatan'] = $this->supermodel->getData('kecamatan');
		$this->load->vars($data);
		$this->load->view('admin/template');
	}

	function edit($id=null)
	{
		$this->form_validation->set_rules('tahun_pengamatan','Tahun Pengamatan','required');
		$this->form_validation->set_rules('alamat','Alamat','required');
		if($this->form_validation->run()===TRUE) {
			$id = $this->input->post('id');
			$in['tahun_pengamatan'] = $this->input->post('tahun_pengamatan');
			$in['alamat'] = $this->input->post('alamat');
			$in['description'] = $this->input->post('keterangan');
			$in['lat'] = $this->input->post('lat');
			$in['lng'] = $this->input->post('lng');
			$in['kelurahan_id'] = $this->input->post('kelurahan');
			$in['marker-color'] = $this->input->post('marker-color');
			$in['marker-symbol'] = $this->input->post('icon');
			$in['marker-size'] = $this->input->post('marker-size');
			
			$kecamatan = $this->supermodel->getData('kecamatan',array('kecamatan_id'=>$this->input->post('kecamatan')));
			$kelurahan = $this->supermodel->getData('kelurahan',array('kelurahan_id'=>$this->input->post('kelurahan')));	
			
			$keca = $kecamatan->row_array();
			$kelu = $kelurahan->row_array();

			//$in['kecamatan'] = $keca['kecamatan_nama'];
			//$in['kelurahan'] = $kelu['kelurahan_nama'];
			$in['icon_map'] = "icon-mata_air.png";
			if($_FILES['foto']['name']) {
				$cek = $this->supermodel->getData('mata_air',array('mata_air_id'=>$id))->row();
				if($cek->foto!='') {
					@unlink('./uploads/ragamdata/konservasi/mata_air/'.$cek->foto);
					@unlink('./uploads/ragamdata/konservasi/mata_air/thumb/'.$cek->foto);
				}
				$ext = end(explode(".", $_FILES['foto']['name']));
				$rand = rand(000,999);
				$name = "mata_air-".$rand.'.'.$ext;
				$unggah = $this->supermodel->unggah_gambar('ragamdata/konservasi/mata_air/','foto',$name,true);
				if($unggah===false) {
					$this->session->set_flashdata('error', 'Upload gagal!!');
					redirect('adm_mata_air/tambah');
				}
				$in['foto'] = $name;
			}
			$this->supermodel->updateData('mata_air',$in,'mata_air_id',$id);
			$this->session->set_flashdata('success', 'Perubahan data sukses');
			$this->m_global->activities('Menyimpan data konservasi Mata Air'.$in['mata_air_id']);
			redirect('adm_mata_air/edit/'.$id);
		}
		$data['title'] = "Edit Data Konservasi Mata Air";
		$data['konten'] = 'admin/konservasi/mata_air/edit';
		$data['kecamatan'] = $this->supermodel->getData('kecamatan');
		$data['icon'] = $this->supermodel->getData('icon');
		$data['item'] = $this->supermodel->getData('mata_air',array('mata_air_id'=>$id))->row_array();
		$data['kelurahan'] = $this->supermodel->getData('kelurahan', array('kelurahan_id'=>$data['item']['kelurahan_id']))->row_array();
		$this->load->vars($data);
		$this->load->view('admin/template');
	}

	function view_cetak()
	{
		$data['title'] = "Cetak Upaya konservasi Mata Air";
		$data['konten'] = 'admin/konservasi/mata_air/cetak';
		$link = 'adm_mata_air/index/';
		$limit= 10;
		$uri_segment= 3;
		$offset= $this->uri->segment($uri_segment);
		$jum = $this->supermodel->getData('mata_air');
		$data['listview'] = $this->supermodel->getData('mata_air',$field='', $order='tahun_pengamatan', $dasc='DESC', $limit, $offset);
		$this->supermodel->paging($link,$jum,$limit,$uri_segment);
		$data['offset'] = $offset;
		$this->load->vars($data);
		$this->load->view('admin/template');
	}

	function cetak($id=NULL)
	{
		$data['filename'] = 'Mata_Air-';
		$tgl1 = $this->input->get('tgl1');
		$tgl2 = $this->input->get('tgl2');
		if($tgl1=='')
		{
			//$data['listview'] = $this->db->query("select * from mata_air");
			$data['listview'] = $this->supermodel->getData('mata_air',$field='','tahun_pengamatan','asc');
		}
		else
		{
			$data['listview'] = $this->db->query("select * from mata_air where tahun_pengamatan between '$tgl1' and '$tgl2'");
		}
		
		$this->load->view('cetak/cetak_mata_air', $data);
	}

	function cari()
	{
		$data['title'] = "Data Upaya konservasi Mata Air";
		$data['konten'] = 'admin/konservasi/mata_air/index';
		$link = 'adm_mata_air/index/';
		$limit= 10;
		$uri_segment= 3;
		$offset= $this->uri->segment($uri_segment);
		$jum = $this->supermodel->getData('mata_air');
		$tgl1 = $this->input->post('tahun_pengujian1');
		$tgl2 = $this->input->post('tahun_pengujian2');
		$data['tgl1'] = $tgl1;
		$data['tgl2'] = $tgl2;
		$data['listview'] = $this->db->query("select * from mata_air where tahun_pengamatan between '$tgl1' and '$tgl2'");
		$this->supermodel->paging($link,$jum,$limit,$uri_segment);
		$data['offset'] = $offset;
		$this->load->vars($data);
		$this->load->view('admin/template');
	}
}
?>
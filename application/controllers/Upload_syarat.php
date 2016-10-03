<?php
/**
* Author M.Febriansyah
*/
class Upload_syarat extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('m_global');
		$this->load->model('supermodel');

		/**
		 * @author Hikmahtiar <hikmahtiar.cool@gmail.com>
		 */
		$this->load->model('Perizinan_model');

		 if($this->session->userdata('getLoginAct')==FALSE) {
		 		echo"<script>alert('Anda belum login !!!');document.location.href='".site_url('login_daftar_member/index')."'</script>";
		 }
	}

	public function index($pemohon_id,$perusahaan_id,$jenisizin_id,$permohonan_id)
	{
		if($jenisizin_id == "1" || $jenisizin_id == "2" || $jenisizin_id == "3"){
				$tabel = "sppl";
			}elseif ($jenisizin_id == "4"){
				$tabel = "ukl_upl";
			}elseif ($jenisizin_id == "5"){
				$tabel = "amdal";
			}

		/**
		 * @author Hikmahtiar <hikmahtiar.cool@gmail.com>
		 */
		$data['check_upload_syarat'] = function($permohonan_id, $persyaratan_id) {
			return $this->Perizinan_model->check_exists_data_upload_syarat($permohonan_id, $persyaratan_id);
		};

		$data['nama_dokumen'] = function($dokumen_id) {
			$dokumen = $this->Perizinan_model->get_dokumen_name($dokumen_id);
			if($dokumen) {
				return $dokumen->file_name;
			}

			return '';
		};

		$data['permohonan_id'] = $permohonan_id;
		$data['tabel'] = $tabel;
		$data['jenisizin_id'] = $jenisizin_id;
		$data['pemohon_id'] = $pemohon_id;
		$data['perusahaan_id'] = $perusahaan_id;
		$data['member_id'] = $this->session->userdata('member_id');
		$data['konten'] = "izin_lingkungan/upload_syarat";
		$this->load->view('izin_lingkungan/template',$data);
	}


	function dokumen(){
		$perusahaan_id = $this->input->post('perusahaan_id');
		$sql = $this->supermodel->queryManual("SELECT * FROM direktori_member WHERE perusahaan_id = '".$perusahaan_id."' ORDER BY dokumen_id DESC");
	echo"<table class='table table-striped table-bordered'>
			<tr>
        		<td>No</td>
        		<td>Nama</td>
        		<td></td>
        	</tr>";
        		if($sql->num_rows()>0) {
					$no=0;
					foreach ($sql->result() as $r){
						$no++;
				$a = "get_file('$r->dokumen_id','$r->file_name')";

        echo'<tr>
        		<td>'.$no.'</td>
        		<td>'.$r->file_name.'</td>
        		<td>
        			<a href='.site_url('dokumen_member/view_dok/'.$r->file).' target="_blank" class="btn btn-info btn-xs"><i class="fa fa-search"></i></a>
        			<a onclick="'.$a.'" data-dismiss="modal" class="btn btn-success btn-xs"><i class="fa fa-check"></i></a>
        		</td>
        	</tr>';
        	}}	  	    			
	echo "</table>
		";
	}



	/**
	 * Simpan Perizinan
	 * 
	 * @author Hikmahtiar <hikmahtiar.cool@gmail.com>
	 */
	public function simpan($permohonan_id) {

		$post = $this->input->post();
		$dokumen_id = $post['dokumen_id'];
		$persyaratan_id = $post['syarat_id'];

		//var_dump($persyaratan_id);
		//var_dump($dokumen_id);

		$key = 0;
		foreach($dokumen_id as $row) {

			$dokumen_id_fix = $row['value'];
			$persyaratan_id_fix = $persyaratan_id[$key]['value'];
			if($dokumen_id_fix != "")
			{
				$check = $this->Perizinan_model->check_exists_data_upload_syarat($permohonan_id, $persyaratan_id_fix);
				if($check)
				{
					if($check->dokumen_id != $dokumen_id_fix)
					{
						$this->Perizinan_model->upload_syarat_update($permohonan_id, $persyaratan_id_fix, $dokumen_id_fix);
					}
				}
				else
				{
					$data = array(
						'permohonan_id'  => $permohonan_id,
						'persyaratan_id' => $persyaratan_id_fix,
						'dokumen_id' 	 => $dokumen_id_fix,
						'status'		 => 0
					);
					$this->Perizinan_model->upload_syarat_save($data);	
				}	
			} 
			$key++;
		}

		$response['data'] = array(
			'status'  => 'success',
			'message' => 'Persyaratan '.$permohonan_id.' telah disimpan'
		);

		echo json_encode($response);

	}
 }
?>
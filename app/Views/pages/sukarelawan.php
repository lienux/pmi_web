<?= $this->extend('layout/web') ?>

<?= $this->section('content') ?>

<!-- ======= Hero Section ======= -->
<section id="hero" class="hero d-flex align-items-center">
    <div class="container">
        <div class="row gy-4">
            <div class="col-lg-6">
                <div class="card" id="card_input">
                    <div class="card-body">
                        <header class="section-header">
                            <h2>Form Registrasi Sukarelawan</h2>
                            <h5>Donor Darah Sukarelawan</h5>
                        </header>
                        <div class="alert text-light collapse" id="alert_input"></div>
                        <div class="collapse" id="loader_input">
                            <div class="d-flex justify-content-center mb-4">
                                <div class="spinner-border text-danger" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                        <form action="<?=base_url();?>/sukarelawan/create" method="post" class="">
                            <div>
                                
                                <div class="mb-3 row">
                                    <label for="nik" class="col-sm-3 col-form-label">NIK</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" name="nik" id="nik" placeholder="NIK" required>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="name" class="col-sm-3 col-form-label">Nama</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" name="name" id="name" placeholder="Nama Lengkap" required>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="hp" class="col-sm-3 col-form-label">No HP</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" name="hp" id="hp" placeholder="No HP" required>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="hp" class="col-sm-3 col-form-label">Lokasi</label>
                                    <div class="col-sm-9">
                                        <select class="form-select" id="inputGroupSelect02" name="lokasi" id="lokasi">
                                            <option selected disabled>Choose...</option>
                                            <option value="1">Jakarta</option>
                                            <option value="2">Surabaya</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="hp" class="col-sm-3 col-form-label">Jadwal Donor Darah</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" name="schedule" id="datepicker" placeholder="" required>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="hp" class="col-sm-3 col-form-label"></label>
                                    <div class="col-sm-9">
                                        <a hreff="#" class="btn btn-primary" onclick="MAIN.EVENTS.submitSukarelawan();">Submit</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card collapse" id="qrcode_card">
                    <div class="card-body">
                        <header class="section-header">
                            <h2>QRCODE Anda</h2>
                            <h5>Tunjukan QRCODE ini kepada petugas saat akan melakukan Donor Darah.</h5>
                        </header>
                        <div class="alert text-light collapse" id="alert_input"></div>
                        <div class="collapse" id="loader_input">
                            <div class="d-flex justify-content-center mb-4">
                                <div class="spinner-border text-danger" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="text-center" id="qrcode"></div>
                            <div id="items"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section><!-- End Hero -->
<?= $this->endSection() ?>

<?= $this->section('javascript') ?>
<script>
    base_url = '<?=base_url();?>';
</script>
<script src="<?=base_url()?>/app/frontend/sukarelawan.js"></script>
<?= $this->endSection() ?>
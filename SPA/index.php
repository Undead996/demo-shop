<?php
define('SEND_PARAMS'  , ['ext_transact' => '',
                         'num_shop' => '4010',
                         'keyt_shop' => '40914810600000000004',
                         'payform' => '',
                         'skin' => '',
                         'free_param' => 'hello',
                         'proc_url' => 'http://192.168.121.5:3300/index.php',
                        //  'proc_url' => 'http://192.168.100.24:80',
                        ]);
?>
<script>
    const sendData = <?php print json_encode(SEND_PARAMS);?>;
</script>
<?php
require './public/index.html';
?>




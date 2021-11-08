<?php
define('SEND_PARAMS'  , ['ext_transact' => '',
                         'num_shop' => '4010',
                         'keyt_shop' => '40914810600000000004',
                         'payform' => '',
                         'skin' => '',
                         'free_param' => 'hello'
                        ]);
?>
<script>
    const sendData = <?php print json_encode(SEND_PARAMS);?>;
</script>
<?php
require './index.html';
?>




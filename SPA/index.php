<?php
require './config.php';
?>
<script>
    const sendData = <?php print json_encode(SEND_PARAMS);?>;
</script>
<?php
require './public/index.html';
?>




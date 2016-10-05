<?php include("class_lib.php"); ?>
<?php
    $Allen = new person("Allen Ivy");
    $Christopher = new person("Christopher Ivy");
    
    echo "Allen full name is ". $Allen->get_name();
    $james = new employee("Johnny Fingers");
		echo "---> " . $james->get_name();
?>
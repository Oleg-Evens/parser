<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="style.css">
</head>
<body>

<?php
require 'phpQuery-onefile.php';
?>
<table>
<?php
for($r = 1; $r < 6; $r++) {
	if($r != 1) {
		$url = 'https://motorland.by/auto-parts/peugeot/?pg'.$r.'';
	} else {
		$url = 'https://motorland.by/auto-parts/peugeot/';
	}
	$file = file_get_contents($url);

	$doc = phpQuery::newDocument($file);
	if($r == 1) {
		$i = 0;
	} else $i = 1;
	for($i; $i < 21; $i++) {
		if($i == 0) {
			?><thead><?php $tr = $doc->find('tr:eq('.$i.')');?></thead><tbody><?php
			$doc->find('thead tr th:eq(7)')->remove();
			$doc->find('thead tr th:eq(6)')->remove();
			$doc->find('thead tr th:eq(0)')->remove();
		} else $tr = $doc->find('tr:eq('.$i.')');
		$tr = pq($tr);
		$tr->find('div')->remove();
		$tr->find('td:eq(7)')->remove();
		$tr->find('td:eq(6)')->remove();
		$tr->find('td:eq(0)')->remove();
		$tr->find('span')->remove();
		?><tr><?php
		echo $tr;
		?></tr><?php
	}
}
?>
</tbody>

</table>

</body>
</html>
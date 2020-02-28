<template>
  <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr class="accordion-toggle collapsed" id="accordion1" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne">
<td class="expand-button"></td>
<td>Cell</td>
<td>Cell</td>
<td>Cell</td>

</tr>
<tr class="hide-table-padding">
<td></td>
<td colspan="3">
<div id="collapseOne" class="collapse in p-3">
  <div class="row">
    <div class="col-2">label</div>
    <div class="col-6">value 1</div>
  </div>
  <div class="row">
    <div class="col-2">label</div>
    <div class="col-6">value 2</div>
  </div>
  <div class="row">
    <div class="col-2">label</div>
    <div class="col-6">value 3</div>
  </div>
  <div class="row">
    <div class="col-2">label</div>
    <div class="col-6">value 4</div>
  </div>
</div></td>
</tr>
      <tr class="accordion-toggle collapsed" id="accordion2" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
<td class="expand-button"></td>
<td>Cell</td>
<td>Cell</td>
<td>Cell</td>

</tr>
<tr class="hide-table-padding">
<td></td>
<td colspan="4">
<div id="collapseTwo" class="collapse in p-3">
  <div class="row">
    <div class="col-2">label</div>
    <div class="col-6">value</div>
  </div>
  <div class="row">
    <div class="col-2">label</div>
    <div class="col-6">value</div>
  </div>
  <div class="row">
    <div class="col-2">label</div>
    <div class="col-6">value</div>
  </div>
  <div class="row">
    <div class="col-2">label</div>
    <div class="col-6">value</div>
  </div>
</div></td>
</tr>
    </tbody>
  </table>
</div>
</template>

<script >
   
</script>

<style>
 
.results {
  width: 100%;
  height: 1000px;
  background-image: url('~@/assets/images/questionmark.jpeg');
  background-size: 100%;
  margin: 0px;
}
tr.hide-table-padding td {
  padding: 0;
}

.expand-button {
	position: relative;
}

.accordion-toggle .expand-button:after
{
  position: absolute;
  left:.75rem;
  top: 50%;
  transform: translate(0, -50%);
  content: '-';
}
.accordion-toggle.collapsed .expand-button:after
{
  content: '+';
}

</style>
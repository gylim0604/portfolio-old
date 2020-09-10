var navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<span class="navbar-brand" href="#">
    <div id="logo" >Guang Yi Lim </div>
    <div id="logo-subtext">software engineer </div>    
</span>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div class="navbar-nav">
    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
    <a class="nav-item nav-link" href="#">Resume</a>
    <a class="nav-item nav-link" href="#">Projects</a>
    <a class="nav-item nav-link" href="#">Contact</a>
  </div>
</div>
</nav>`

$('#header').html(navbar);
class Header extends HTMLElement{
  connectedCallback(){
    this.innerHTML=`
      <nav class="navbar navbar-expand-lg navbar-light">
      <span class="navbar-brand" href="#">
          <div id="logo" >Guang Yi Lim </div>
          <div id="logo-subtext">software engineer </div>    
      </span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="./index.html">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="./resume.html">Resume</a>
          <!-- <a class="nav-item nav-link" href="#">Projects</a> -->
          <a class="nav-item nav-link" href="./contact.html">Contact</a>
        </div>
      </div>
      </nav>
      `;
  }
}
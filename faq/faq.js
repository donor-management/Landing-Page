class Panel {
    constructor(panel) {
        this.panel = panel;
        this.panelButtons = this.panel.querySelector('.panel-buttons');
        this.panelBtnOpen = this.panel.querySelector('.panel-btn-open');
        this.panelBtnClose = this.panel.querySelector('.panel-btn-close');
        this.panelContent = this.panel.querySelector('.panel-content');
      
        this.panelButtons.addEventListener('click', () => this.togglePanel());
    }

    togglePanel() {
  
        this.panelBtnOpen.classList.toggle('hide-btn');
        this.panelBtnClose.classList.toggle('hide-btn');

        if (this.panelBtnOpen.className.includes('hide-btn')) {
            // if(window.innerHeight > 850) {
                this.panelContent.style.height = "70px";
                this.panelContent.style.marginTop = "20px";
            // } else if (window.innerWidth < 849 && window.innerWidth > 599) {
            //     this.panelContent.style.height = "120px";
            //     this.panelContent.style.marginTop = "20px";
            // } else if (window.innerWidth < 600) {
            // this.panelContent.style.height = "150px";
            // this.panelContent.style.marginTop = "20px";
            // }
        } else {
            this.panelContent.style.height = "0px";
            this.panelContent.style.marginTop = "0px";
        }
        console.log(window.innerWidth);
    }
}
  
const panels = document.querySelectorAll('.panel');
  
panels.forEach(function(panel){
    return new Panel(panel);
});

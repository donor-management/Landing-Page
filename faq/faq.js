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
            this.panelContent.style.height = this.panelContent.scrollHeight + "px";
            this.panelContent.style.marginTop = "20px";
            TweenMax.to(this.panelBtnClose, .5, {rotation:360, parseTransform:true, clearProps:"rotation"});

        } else {
            this.panelContent.style.height = "0px";
            this.panelContent.style.marginTop = "0px";
            TweenMax.to(this.panelBtnOpen, .5, {rotation:"360_ccw", parseTransform:true, clearProps:"rotation"});

        }
    }
}
  
const panels = document.querySelectorAll('.panel');
  
panels.forEach(function(panel){
    return new Panel(panel);
});

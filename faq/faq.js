class Panel {
    constructor(panel) {
        this.panel = panel;
        // console.log(this.panel);

        this.panelButtons = this.panel.querySelector('.panel-buttons');
        // console.log(this.panelButtons);

        this.panelBtnOpen = this.panel.querySelector('.panel-btn-open');
        // console.log(this.panelBtnOpen);

        this.panelBtnClose = this.panel.querySelector('.panel-btn-close');
        // console.log(this.panelBtnClose);

        this.panelContent = this.panel.querySelector('.panel-content');
        // console.log(this.panelContent);

        this.panelButtons.addEventListener('click', () => this.togglePanel());

    }

    togglePanel() {
  
        this.panelBtnOpen.classList.toggle('hide-btn');
        this.panelBtnClose.classList.toggle('hide-btn');


        if (this.panelBtnOpen.className.includes('hide-btn')) {
            this.panelContent.style.height = this.panelContent.scrollHeight + "px";
            this.panelContent.style.marginTop = "20px";
            TweenMax.to(this.panelBtnClose, .5, {rotation:360, parseTransform:true, clearProps:"rotation"});
            // console.log(this.panelContent.scrollHeight);

        } else {
            this.panelContent.style.height = "0px";
            this.panelContent.style.marginTop = "0px";
            TweenMax.to(this.panelBtnOpen, .5, {rotation:"360_ccw", parseTransform:true, clearProps:"rotation"});
            // console.log(this.panelContent.scrollHeight);

        }
    }
}
  
const panels = document.querySelectorAll('.panel');
// console.log(panels);

panelsArray = Array.from(panels);
// console.log(panelsArray);
  
panelsArray.map(function(panel){
    return new Panel(panel);
});

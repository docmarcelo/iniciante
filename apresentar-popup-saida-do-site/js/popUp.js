

  bioEp.init({
    html: '<div id="bio_ep_content">' +
            '<img src="imagens/livro.png" alt="Ebook Grátis!" />' +
            '<span>Ebook Grátis!</span>' +
            '<span>Como Ganhar dinheiro na bolsa de valores</span>' +
            '<span><input type="text" name="nome" id=""><br><input type="email" name="email" id=""></span>' +
            '<a href="#" class="bio_btn">CLIQUE AQUI</a>' +
         '</div>',
    css: '#bio_ep {width: 600px; height: 450px; color: #fff; background-color: #1a344d; text-align: center;}' +
            '#bio_ep_content {padding: 24px 0 0 0; font-family: "Titillium Web";}' +
            '#bio_ep_content span:nth-child(2) {display: block; color: #fff; font-size: 32px; font-weight: 600;}' +
            '#bio_ep_content span:nth-child(3) {display: block; font-size: 16px;}' +
            '#bio_ep_content span:nth-child(4) {display: block; margin: -5px 0 0 0; font-size: 16px; font-weight: 600;}' +
            '.bio_btn {display: inline-block; margin: 18px 0 0 0; padding: 7px; color: #fff; font-size: 14px; font-weight: 600; background-color: #70bb39; border: 1px solid #47ad0b; cursor: pointer; -webkit-appearance: none; -moz-appearance: none; border-radius: 0; text-decoration: none;}',
    fonts: ['//fonts.googleapis.com/css?family=Titillium+Web:300,400,600'],
    cookieExp: 0
});
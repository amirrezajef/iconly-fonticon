
    $('.otic .icotwr:last-child .iccode input').each(function(){
        var txt = $(this).val();
        $(this).val('<i class="'+ txt +' icbo"></i>');
    });
    $('.otic .icotwr:first-child .iccode input').each(function(){
        var txt = $(this).val();
        $(this).val('<i class="'+ txt +' icli"></i>');
    });
    $('.glyph>.iccode input').each(function(){
        var txt = $(this).val();
        $(this).val('<i class="'+ txt +'"></i>');
    });

    function copyToClipboard(text) {

        var textArea = document.createElement( "textarea" );
        textArea.value = text;
        document.body.appendChild( textArea );       
        textArea.select();

        try {
            var successful = document.execCommand( 'copy' );
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy',err);
        }    
        document.body.removeChild( textArea );
    }

    $('.iccode .cpbtn').click( function(){
        var clipboardText = "";
        clipboardText = $(this).parents('.iccode').find('input').val();
        copyToClipboard( clipboardText );
        copySuc();
    });

    var timer;   
    
    function copySuc(){
        $('.showAlert').fadeIn();
        startMsg()
    }


    function removeAlert(){
        $('.showAlert').fadeOut();
        clearTimeout(timer);
        setTimeout(function(){
            $('#RunAlert').remove();
        }, 1000);
    }

    $( ".showAlert" ).hover(
        function() {
            $('.alertFull').removeClass('startFull');
            clearTimeout(timer);
        }, function() {
            $('.alertFull').addClass('startFull'); 
            timer = setTimeout(function(){
                removeAlert();
            }, 2000);
        }
    );


    function startMsg(){   
        clearTimeout(timer);
        timer = setTimeout(function(){
            removeAlert();
        }, 2000);
    }
    
    
    //search
    $(function(){

        $('#Search').keyup(function(){

            var searchText = $(this).val().toUpperCase();

            $('.glyph').each(function(){

                var currentLiText = $(this).find('.icna .mls').text().toUpperCase(),
                    showCurrentLi = currentLiText.indexOf(searchText) !== -1;

                $(this).toggle(showCurrentLi);

            });     
        });

    });
/*TMODJS:{"version":4,"md5":"fd7024f22feecdca6d85b304d6c7cca1"}*/
template('publish/detail_imginfo',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,_url=$data._url,photo_folder=$data.photo_folder,photo_name=$data.photo_name,photo_type=$data.photo_type,$out='';$out+='<img src="images/60x60.gif" data-lazyload="';
$out+=$escape(_url + photo_folder + photo_name + '.' + photo_type);
$out+='" onload="lazyload(this)"/> ';
return new String($out);
});
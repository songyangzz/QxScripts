

var body = $response.body;
var url = $request.url;

let obj = JSON.parse(body);
var j=0;
if(obj.brushes!=undefined){
  
  for(j=0;j<obj.brushes.length;j++){
    obj.brushes[j].ownership="free";
  }
}
if(obj.sounds!=undefined){
  
  for(j=0;j<obj.sounds.length;j++){
    obj.sounds[j].ownership="free";
  }
}
if(obj.wallpapers!=undefined){
  
  for(j=0;j<obj.wallpapers.length;j++){
    obj.wallpapers[j].ownership="free";
  }
}
if(obj.features!=undefined){
  
  for(j=0;j<obj.features.length;j++){
    obj.features[j].ownership="free";
  }
}
if(obj.strokes!=undefined){
  
  for(j=0;j<obj.strokes.length;j++){
    obj.strokes[j].ownership="free";
  }
}
if(obj.bubbles!=undefined){
  
  for(j=0;j<obj.bubbles.length;j++){
    obj.bubbles[j].ownership="free";
  }
}
if(obj.filters!=undefined){
  
  for(j=0;j<obj.filters.length;j++){
    obj.filters[j].ownership="free";
  }
}
if(obj.fonts!=undefined){
  
  for(j=0;j<obj.fonts.length;j++){
    obj.fonts[j].ownership="free";
  }
}
if(obj.packets!=undefined){
  
  for(j=0;j<obj.packets.length;j++){
    obj.packets[j].ownership="free";
  }
}
if(obj.memberships!=undefined){
  let member={
		"expireAt": 3742732800,
		"iconUrl": "http://m0-file2.bybutter.com/uploaded/toaster/2da1163f9fb34ea280b8ef7497ccde44.png",
		"id": "1",
		"name": "普通会员",
		"ownership": "temporary",
		"remark": "使用期限：截至2020-01-29",
		"usageType": "unlimited",
		"validFrom": 1580038534
	};
	obj.memberships[0]=member;
}
body = JSON.stringify(obj);  
$done({body});
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("https://lh6.googleusercontent.com/nZBMWXkY5Jcxp56sbj_o8aJQs9SUzvb-YcJuXpLP7o1M8sgtSIWnyOHHdEnRtWLbHndXyUpbT4pnZ35flBjM=w1440-h788-rw", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(140);
        block_image_object.set({
            top:playerX,
            left:playerY
        });
        canvas.add(block_image_object);
    });
}
if(keyPressed=="38"){
    up();
    console.log("up");
}
if(keyPressed=="40"){
    down();
    console.log("down");
}
if(keyPressed=="37"){
    left();
    console.log("left");
}
if(keyPressed=="39"){
    right();
    console.log("right");
}
if(keyPressed=="70"){
    new_image("ironman_face.jpg");
    console.log("f");
}
if(keyPressed=="66"){
    new_image("spiderman_body.jpg");
    console.log("b");
}
if(keyPressed=="76"){
    new_image("hulk_legs.jpg");
    console.log("l");
}
if(keyPressed=="82"){
    new_image("thor_right_hand.jpg");
    console.log("r");
}
if(keyPressed=="72"){
    new_image("captain_america_left_hand.jpg");
    console.log("h");
}

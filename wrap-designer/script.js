

function getMyElement(id){
  var elm = null;
  if (document.getElementById)
  {
    // browser implements part of W3C DOM HTML
    // Gecko, Internet Explorer 5+, Opera 5+
    elm = document.getElementById(id);
  }
  else if (document.all)
  {
    // Internet Explorer 4 or Opera with IE user agent
    elm = document.all[id];
  }
  else if (document.layers)
  {
    // Navigator 4
    elm = document.layers[id];
  }
  return elm
}
// move the element with id to x,y
// where x,y are the horizontal
// and vertical position in pixels


function validateInt(iString){
    // no leading 0s allowed
    return (("" + parseInt(iString)) == iString);
}


var blankcolor;
var underwrapcolor;
var wrapcolor;
var NumColors=111;
var NumBlankColors=32;   // update when adding blank colors to .js file
var ColorList = new Array(NumColors);
var BlankColors = new Array(NumBlankColors);

var SizeMultiplier=2;
var UnderWrapWidth=15;
var InnerUnderWrapWidth=3;
var GuideWrapWidth=40;
var CenterTrimWidth;
var OuterCenterTrimWidth;
var InnerTrimWidth;
var OuterTrimWidth;
var WrapWidth;
var BlankWidth=80;
var MasterHeight=20;

function InitColors(){
	var i;
  for (i=0; i < NumColors; i++){
		ColorList[i]=new Array(2);
  }
	  ColorList[0][0]="threads/0001.jpg";
	  ColorList[0][1]="001 - Black";
	  ColorList[1][0]="threads/0002.jpg";
	  ColorList[1][1]="002 - White";
	  ColorList[2][0]="threads/0037.jpg";
	  ColorList[2][1]="37 - Light Blue";
	  ColorList[3][0]="threads/0050.jpg";
	  ColorList[3][1]="50 - Cobalt Blue";
	  ColorList[4][0]="threads/0051.jpg";
	  ColorList[4][1]="51 - Peach";
	  ColorList[5][0]="threads/0052.jpg";
	  ColorList[5][1]="52 - Rose";
	  ColorList[6][0]="threads/0066.jpg";
	  ColorList[6][1]="066 - Navy";
	  ColorList[7][0]="threads/0105.jpg";
	  ColorList[7][1]="105 - Spring Green";
	  ColorList[8][0]="threads/0200.jpg";
	  ColorList[8][1]="200 - Sunburst";
	  ColorList[9][0]="threads/0206.jpg";
	  ColorList[9][1]="206 - Garnet";
	  ColorList[10][0]="threads/0209.jpg";
	  ColorList[10][1]="209 - Goldenrod";
	  ColorList[11][0]="threads/0221.jpg";
	  ColorList[11][1]="221 - Orange";
	  ColorList[12][0]="threads/0245.jpg";
	  ColorList[12][1]="245 - Royal Blue";
	  ColorList[13][0]="threads/0246.jpg";
	  ColorList[13][1]="246 - Dark Blue";
	  ColorList[14][0]="threads/0257.jpg";
	  ColorList[14][1]="257 - Rust";
	  ColorList[15][0]="threads/0272.jpg";
	  ColorList[15][1]="272 - Blue Dun";
	  ColorList[16][0]="threads/0290.jpg";
	  ColorList[16][1]="290 - Tan";
	  ColorList[17][0]="threads/0326.jpg";
	  ColorList[17][1]="326 - Scarlet";
	  ColorList[18][0]="threads/0335.jpg";
	  ColorList[18][1]="335 - Candy Apple";
	  ColorList[19][0]="threads/0337.jpg";
	  ColorList[19][1]="337 - Maroon";
	  ColorList[20][0]="threads/0340.jpg";
	  ColorList[20][1]="340 - Gold";
	  ColorList[21][0]="threads/0396.jpg";
	  ColorList[21][1]="396 - Dark Brown";
	  ColorList[22][0]="threads/0411.jpg";
	  ColorList[22][1]="411 - Hot Pink";
	  ColorList[23][0]="threads/0441.jpg";
	  ColorList[23][1]="441 - Charcoal";
	  ColorList[24][0]="threads/0468.jpg";
	  ColorList[24][1]="468 - Purple";
	  ColorList[25][0]="threads/0541.jpg";
	  ColorList[25][1]="541 - Medium Brown";
	  ColorList[26][0]="threads/0638.jpg";
	  ColorList[26][1]="638 - Teal";
	  ColorList[27][0]="threads/0720.jpg";
	  ColorList[27][1]="720 - Medium Gray";
	  ColorList[28][0]="threads/1011.jpg";
	  ColorList[28][1]="1011 - Gun Metal";
	  ColorList[29][0]="threads/5274.jpg";
	  ColorList[29][1]="5274 - Chestnut";
	  ColorList[30][0]="threads/5896.jpg";
	  ColorList[30][1]="5896 - Dark Green";
	  ColorList[31][0]="threads/6778.jpg";
	  ColorList[31][1]="6778 - Lemon Yellow";
	  ColorList[32][0]="threads/6779.jpg";
	  ColorList[32][1]="6779 - Medium Green";
	//metallic
	  ColorList[33][0]="threads/9000.jpg";
	  ColorList[33][1]="9000 - Metalic Gold";
	  ColorList[34][0]="threads/9001.jpg";
	  ColorList[34][1]="9001 - Metalic Black";
	  ColorList[35][0]="threads/9002.jpg";
	  ColorList[35][1]="9002 - Metalic Silver";
	  ColorList[36][0]="threads/9003.jpg";
	  ColorList[36][1]="9003 - Metalic Pearl White";
	  ColorList[37][0]="threads/9004.jpg";
	  ColorList[37][1]="9004 - Metalic Old Gold";
	  ColorList[38][0]="threads/9005.jpg";
	  ColorList[38][1]="9005 - Metalic Pewter";
	  ColorList[39][0]="threads/9007.jpg";
	  ColorList[39][1]="9007 - Metalic Pale Gold";
	  ColorList[40][0]="threads/9008.jpg";
	  ColorList[40][1]="9008 - Metalic Burgundy";
	  ColorList[41][0]="threads/9009.jpg";
	  ColorList[41][1]="9009 - Metalic Glitzy Gold";
	  ColorList[42][0]="threads/9037.jpg";
	  ColorList[42][1]="9037 - Metalic Ice Blue";
	  ColorList[43][0]="threads/9050.jpg";
	  ColorList[43][1]="9050 - Metalic Electric Blue";
	  ColorList[44][0]="threads/9060.jpg";
	  ColorList[44][1]="9060 - Metalic Rainbow";
	  ColorList[45][0]="threads/9105.jpg";
	  ColorList[45][1]="9105 - Metalic Lime";
	  ColorList[46][0]="threads/9206.jpg";
	  ColorList[46][1]="9206 - Metalic Fuschia";
	  ColorList[47][0]="threads/9245.jpg";
	  ColorList[47][1]="9245 - Metalic Royal Blue";
	  ColorList[48][0]="threads/9252.jpg";
	  ColorList[48][1]="9252 - Metalic Aquamarine";
	  ColorList[49][0]="threads/9270.jpg";
	  ColorList[49][1]="9270 - Metalic Aqua";
	  ColorList[50][0]="threads/9326.jpg";
	  ColorList[50][1]="9326 - Metalic Red";
	  ColorList[51][0]="threads/9337.jpg";
	  ColorList[51][1]="9337 - Metalic Dusty Rose";
	  ColorList[52][0]="threads/9358.jpg";
	  ColorList[52][1]="9358 - Metalic Green";
	  ColorList[53][0]="threads/9396.jpg";
	  ColorList[53][1]="9396 - Metalic Copper";
	  ColorList[54][0]="threads/9252.jpg";
	  ColorList[54][1]="9252 - Metalic Aquamarine";
	  ColorList[55][0]="threads/9468.jpg";
	  ColorList[55][1]="9468 - Metalic Purple";
	  ColorList[56][0]="threads/9540.jpg";
	  ColorList[56][1]="9540 - Metalic Red Bronze";
	  ColorList[57][0]="threads/9541.jpg";
	  ColorList[57][1]="9541 - Metalic Bronze";
	//Matte
	  ColorList[58][0]="threads/9600.jpg";
	  ColorList[58][1]="9600 - Metalic Matte Gold";
	  ColorList[59][0]="threads/9601.jpg";
	  ColorList[59][1]="9601 - Metalic Matte Bronze";
	  ColorList[60][0]="threads/9602.jpg";
	  ColorList[60][1]="9602 - Metalic Matte Silver";
	//Trimar
	  ColorList[61][0]="threads/0001g.jpg";
	  ColorList[61][1]="0001G - Trimar Black/Gold";
	  ColorList[62][0]="threads/0001s.jpg";
	  ColorList[62][1]="0001S - Trimar Black/Silver";
	  ColorList[63][0]="threads/0002g.jpg";
	  ColorList[63][1]="0002G - Trimar White/Gold";
	  ColorList[64][0]="threads/0002s.jpg";
	  ColorList[64][1]="0002S - Trimar White/Silver";
	  ColorList[65][0]="threads/0254g.jpg";
	  ColorList[65][1]="0245G - Trimar Blue/Gold";
	  ColorList[66][0]="threads/0254s.jpg";
	  ColorList[66][1]="0245S - Trimar Blue/Silver";
	  ColorList[67][0]="threads/0326g.jpg";
	  ColorList[67][1]="0326G - Trimar Red/Gold";
	  ColorList[68][0]="threads/0326s.jpg";
	  ColorList[68][1]="0326S - Trimar Red/Silver";
	  ColorList[69][0]="threads/0541g.jpg";
	  ColorList[69][1]="0541G - Trimar Brown/Gold";
	  ColorList[70][0]="threads/0541s.jpg";
	  ColorList[70][1]="0541S - Trimar Brown/Silver";
	  ColorList[71][0]="threads/5896g.jpg";
	  ColorList[71][1]="5896G - Trimar Green/Gold";
	  ColorList[72][0]="threads/5896s.jpg";
	  ColorList[72][1]="5896S - Trimar Green/Silver";
	//Classic Twist
	  ColorList[73][0]="threads/0002t.jpg";
	  ColorList[73][1]="002 - Classic Twist Black/White";
	  ColorList[74][0]="threads/0207t.jpg";
	  ColorList[74][1]="207 - Classic Twist Black/Yellow";
	  ColorList[75][0]="threads/0221t.jpg";
	  ColorList[75][1]="221 - Classic Twist Black/Orange";
	  ColorList[76][0]="threads/0326t.jpg";
	  ColorList[76][1]="326 - Classic Twist Black/Scarlet";
	  ColorList[77][0]="threads/5896t.jpg";
	  ColorList[77][1]="5896 - Classic Twist Black/Green";
	//Electra Hologram Braid
	  ColorList[78][0]="threads/4014.jpg";
	  ColorList[78][1]="4014 - Pearl Electra Hologram Braid";
	  ColorList[79][0]="threads/5030.jpg";
	  ColorList[79][1]="5030 - Silver Electra Hologram Braid";
	  ColorList[80][0]="threads/5031.jpg";
	  ColorList[80][1]="5031 - Gold Electra Hologram Braid";
	  ColorList[81][0]="threads/5032.jpg";
	  ColorList[81][1]="5032 - Royal Blue Electra Hologram Braid";
	  ColorList[82][0]="threads/5033.jpg";
	  ColorList[82][1]="5033 - Green Electra Hologram Braid";
	  ColorList[83][0]="threads/5034.jpg";
	  ColorList[83][1]="5034 - Black Electra Hologram Braid";
	  ColorList[84][0]="threads/5035.jpg";
	  ColorList[84][1]="5035 - Fuchsia Electra Hologram Braid";
	  ColorList[85][0]="threads/5036.jpg";
	  ColorList[85][1]="5036 - Red Electra Hologram Braid";
	  ColorList[86][0]="threads/5038.jpg";
	  ColorList[86][1]="5038 - Purple Electra Hologram Braid";
	  ColorList[87][0]="threads/5039.jpg";
	  ColorList[87][1]="5039 - Turquoise  Electra Hologram Braid";
	  ColorList[88][0]="threads/5040.jpg";
	  ColorList[88][1]="5040 - Lilac Electra Hologram Braid";
	  ColorList[89][0]="threads/5041.jpg";
	  ColorList[89][1]="5041 - Pink Electra Hologram Braid";
	//HT Braid
	  ColorList[90][0]="threads/htb0000.jpg";
	  ColorList[90][1]="0000 - Silver HT Braid";
	  ColorList[91][0]="threads/htb0001.jpg";
	  ColorList[91][1]="0001 - Silver/Black HT Braid";
	  ColorList[92][0]="threads/htb0002.jpg";
	  ColorList[92][1]="0002 - Pearl HT Braid";
	  ColorList[93][0]="threads/htb0003.jpg";
	  ColorList[93][1]="0003 - Gold/Black HT Braid";
	  ColorList[94][0]="threads/htb0004.jpg";
	  ColorList[94][1]="0004 - Gold HT Braid";
	  ColorList[95][0]="threads/htb0014.jpg";
	  ColorList[95][1]="0014 - Aquamarine HT Braid";
	  ColorList[96][0]="threads/htb0245.jpg";
	  ColorList[96][1]="0245 - Royal Blue HT Braid";
	  ColorList[97][0]="threads/htb0326.jpg";
	  ColorList[97][1]="0326 - Red HT Braid";
	  ColorList[98][0]="threads/htb0327.jpg";
	  ColorList[98][1]="0327 - Red/Black HT Braid";
	  ColorList[99][0]="threads/htb0337.jpg";
	  ColorList[99][1]="0337 - Light Blue HT Braid";
	  ColorList[100][0]="threads/htb0358.jpg";
	  ColorList[100][1]="0358 - Green HT Braid";
	  ColorList[101][0]="threads/htb0468.jpg";
	  ColorList[101][1]="0468 - Purple HT Braid";
	  ColorList[102][0]="threads/htb9001.jpg";
	  ColorList[102][1]="9001 - Black HT Braid";
	  ColorList[103][0]="threads/htb9003.jpg";
	  ColorList[103][1]="9003 - Burgundy HT Braid";
	  ColorList[104][0]="threads/htb9221.jpg";
	  ColorList[104][1]="9221 - Orange HT Braid";
	  ColorList[105][0]="threads/htb9396.jpg";
	  ColorList[105][1]="9396 - Copper HT Braid";
	//HT Braid Metallic
	  ColorList[106][0]="threads/htem9000.jpg";
	  ColorList[106][1]="9000 - Gold HT Electra Metalic";
	  ColorList[107][0]="threads/htem9002.jpg";
	  ColorList[107][1]="9002 - Silver HT Electra Metalic";
	  ColorList[108][0]="threads/htem9245.jpg";
	  ColorList[108][1]="9245 - Royal Blue HT Electra Metalic";
	  ColorList[109][0]="threads/htem9326.jpg";
	  ColorList[109][1]="9326 - Red HT Electra Metalic";
	  ColorList[110][0]="threads/htem9358.jpg";
	  ColorList[110][1]="9358 - Green HT Electra Metalic";
  //ProWrap NCP add below

  }
  for (i=0; i < NumBlankColors; i++){
		BlankColors[i]=new Array(2);
	}
  //RodGeeks Blank colors
    BlankColors[0][0]="#000000";
	  BlankColors[0][1]="Black";
	  BlankColors[1][0]="#1e201e";
	  BlankColors[1][1]="Gloss Clear";
	  BlankColors[2][0]="#444644";
	  BlankColors[2][1]="Raw";
	  BlankColors[3][0]="#FFFFFF";
    BlankColors[3][1]="White";
	  BlankColors[4][0]="#e2e8e2";
	  BlankColors[4][1]="Ivory";
	  BlankColors[5][0]="#053a71";
	  BlankColors[5][1]="Blue";
    BlankColors[6][0]="#88abcf";
    BlankColors[6][1]="Light Blue";
    BlankColors[7][0]="#02143d";
	  BlankColors[7][1]="Dark Blue";
    BlankColors[8][0]="#11afd9";
	  BlankColors[8][1]="Neon Blue";
    BlankColors[9][0]="#911711";
	  BlankColors[9][1]="Red";
    BlankColors[10][0]="#7e1f1f";
	  BlankColors[10][1]="Red Metallic";
    BlankColors[11][0]="#2b101d";
	  BlankColors[11][1]="Maroon";
    BlankColors[12][0]="#c26203";
	  BlankColors[12][1]="Orange";
    BlankColors[13][0]="#ff8301";
	  BlankColors[13][1]="Neon Ornge";
    BlankColors[14][0]="#99230a";
	  BlankColors[14][1]="Burnt Orange Metallic";
    BlankColors[15][0]="#006400";
	  BlankColors[15][1]="Green";
    BlankColors[16][0]="#4b8b29";
	  BlankColors[16][1]="Light Green Metallic";
    BlankColors[17][0]="#012e01";
	  BlankColors[17][1]="Dark Green";
    BlankColors[18][0]="#053223";
	  BlankColors[18][1]="Dark Green Metallic";
    BlankColors[19][0]="#6ce006";
	  BlankColors[19][1]="Neon Green";
    BlankColors[20][0]="#523b93";
	  BlankColors[20][1]="Purple";
    BlankColors[21][0]="#925d9f";
	  BlankColors[21][1]="Lavender Metallic";
    BlankColors[22][0]="#d193a6";
	  BlankColors[22][1]="Pink Pearl";
    BlankColors[23][0]="#ff00b0";
	  BlankColors[23][1]="Neon Pink";
    BlankColors[24][0]="#813f07";
	  BlankColors[24][1]="Copper";
    BlankColors[25][0]="#9f9458";
	  BlankColors[25][1]="Gold Metallic";
    BlankColors[26][0]="#80f617";
	  BlankColors[26][1]="Yellow";
  //DH Custom Rods and Tackle Blank Colors
    BlankColors[27][0]="#ffffff";
    BlankColors[27][1]="White";
    BlankColors[28][0]="#6ce006";
	  BlankColors[28][1]="Neon Green";
    BlankColors[29][0]="#f1281e";
	  BlankColors[29][1]="Red";
    BlankColors[30][0]="#88abcf";
	  BlankColors[30][1]="Baby Blue";
    BlankColors[31][0]="#989898";
	  BlankColors[31][1]="Gray";


function FindBlankColor(name){
	for (i=0; i < NumBlankColors; i++)
	{
		if(BlankColors[i][0] == name) return BlankColors[i][1];
	}
	return " ";
}


function FindColor(name){
	for (i=0; i < NumColors; i++)
	{
		if(ColorList[i][0] == name) return i;
	}
	return -1;
}


function AddColors(listname){
	var i;
	var len;
	var op;
	var elm = getMyElement(listname);
	for (i=0; i < NumColors; i++)
	{
		len = elm.length;
		elm.length = len +1;
		elm.options[len] = new Option(ColorList[i][1], ColorList[i][0], false, false);
	}
	//history.go(0);
}


function newblank(){
	elm = getMyElement('oblankcolor');
	blankcolor = elm.value;
	elm = getMyElement('leftBlank');
	elm.style.backgroundColor=blankcolor;
		elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('rightBlank');
		elm.height=MasterHeight*SizeMultiplier;
	elm.style.backgroundColor=blankcolor;
	newITrim();
	newOTrim();
	newUnderwrap();
}


function newUnderwrap(){
	elm = getMyElement('oUnderwrap');
	underwrapcolor = elm.value;
	if (underwrapcolor == "None")
	{
		underwrapcolor = blankcolor;
	}
	elm = getMyElement('leftUnderwrapImg');
		elm.src=underwrapcolor;
		elm.width=UnderWrapWidth*SizeMultiplier;
		elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('leftInnerUnderwrapImg');
		elm.src=underwrapcolor;
		elm.width=UnderWrapWidth*SizeMultiplier;
		elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('rightInnerUnderwrapImg');
		elm.src=underwrapcolor;
		elm.width=UnderWrapWidth*SizeMultiplier;
		elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('rightUnderwrapImg');
		elm.height=MasterHeight*SizeMultiplier;
		elm.width=UnderWrapWidth*SizeMultiplier;
		elm.src=underwrapcolor;
	newCTrim();
}


function newITrim(){
	var color;
	elm = getMyElement('oITrim');
	color = elm.value;
	if (color == "None")
	{
		color = wrapcolor;
		elm = getMyElement('oITWidth');
		elm.value = 0;
		newITWidth();
	}
	elm = getMyElement('leftInnerTrimImg');
		elm.height=MasterHeight*SizeMultiplier;
	elm.src=color;
	elm = getMyElement('rightInnerTrimImg');
	elm.src=color;
		elm.height=MasterHeight*SizeMultiplier;
}


function newOTrim(){
	var color;
	elm = getMyElement('oOTrim');
	color = elm.value;
	if (color == "None")
	{
		color = blankcolor;
		elm = getMyElement('oOTWidth');
		elm.value = 0;
		newOTWidth();
	}
	elm = getMyElement('leftOuterTrimImg');
	elm.src=color;
		elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('rightOuterTrimImg');
	elm.src=color;
		elm.height=MasterHeight*SizeMultiplier;
}

//76.87 total

function newOTWidth(){
	var width;
	elm = getMyElement('oOTWidth');
	width = elm.value;
	if (! validateInt(width) )
	 {
		alert("Outer trim band width has to be a number!");
		return;
	 }
	if (width==0)
	 {
		width = 1;
		elm = getMyElement('leftOuterTrimImg');
		elm.src=blankcolor;
		elm = getMyElement('rightOuterTrimImg');
		elm.src=blankcolor;
	 }
	OuterTrimWidth=width;
	elm = getMyElement('leftOuterTrim');
		elm.height=MasterHeight*SizeMultiplier;
		elm.width=OuterTrimWidth*SizeMultiplier;
	elm = getMyElement('leftOuterTrimImg');
		elm.width=OuterTrimWidth*SizeMultiplier;
		elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('rightOuterTrim');
		elm.width=OuterTrimWidth*SizeMultiplier;
		elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('rightOuterTrimImg');
		elm.height=MasterHeight*SizeMultiplier;
		elm.width=OuterTrimWidth*SizeMultiplier;
}


function newITWidth(){
	var width;
	elm = getMyElement('oITWidth');
	width = elm.value;
	if (! validateInt(width) )
	{
		alert("Inner trim band width has to be a number!");
		return;
	}
	if (width==0)
	{
		width = 1;
		elm = getMyElement('leftInnerTrimImg');
		elm.src=wrapcolor;
		elm = getMyElement('rightInnerTrimImg');
		elm.src=wrapcolor;
	}
	InnerTrimWidth = width;
	elm = getMyElement('leftInnerTrim');
		elm.height=MasterHeight*SizeMultiplier;
	elm.width=InnerTrimWidth*SizeMultiplier;
	elm = getMyElement('rightInnerTrim');
		elm.height=MasterHeight*SizeMultiplier;
	elm.width=InnerTrimWidth*SizeMultiplier;
	elm = getMyElement('leftInnerTrimImg');
		elm.height=MasterHeight*SizeMultiplier;
	elm.width=InnerTrimWidth*SizeMultiplier;
	elm = getMyElement('rightInnerTrimImg');
		elm.height=MasterHeight*SizeMultiplier;
	elm.width=InnerTrimWidth*SizeMultiplier;
}


function newOCTWidth(){
	var width;
	elm = getMyElement('oOCTWidth');
	width = elm.value;
	if (! validateInt(width) )
	{
		alert("Outer center trim band width has to be a number!");
		return;
	}
	if (width==0)
	{
		width=1;
		elm = getMyElement('leftCenterTrimImg');
		elm.src=underwrapcolor;
		elm = getMyElement('rightCenterTrimImg');
		elm.src=underwrapcolor;
	}

	OuterCenterTrimWidth=width;
	elm = getMyElement('leftCenterTrim');
		elm.width=OuterCenterTrimWidth*SizeMultiplier;
		elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('rightCenterTrim');
		elm.width=OuterCenterTrimWidth*SizeMultiplier;
		elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('leftCenterTrimImg');
		elm.width=OuterCenterTrimWidth*SizeMultiplier;
		elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('rightCenterTrimImg');
		elm.height=MasterHeight*SizeMultiplier;
		elm.width=OuterCenterTrimWidth*SizeMultiplier;
}

function newCTWidth(){
	var width;
	elm = getMyElement('oCTWidth');
	width = elm.value;
	if (! validateInt(width) )
	{
		alert("Center trim band width has to be a number!");
		return;
	}
	if (width==0)
	{
		elm = getMyElement('centerTrimImg');
		elm.src=underwrapcolor;   // im not sure about this line  --  I would try in JSbin and look for errors
	}
	CenterTrimWidth=width;
	elm = getMyElement('centerTrim');
	elm.height=MasterHeight*SizeMultiplier;
	elm.width=CenterTrimWidth*SizeMultiplier;
	elm = getMyElement('centerTrimImg');
	elm.height=MasterHeight*SizeMultiplier;
	elm.width=CenterTrimWidth*SizeMultiplier;
}

// This function needs to be reworked --  repeated code too many times
function newWrapWidth(){
	var width;
	elm = getMyElement('oWrapWidth');
	width = elm.value;
	if (! validateInt(width) )
	{
		alert("The wrap width has to be a number!");
		return;
	}
	if (width<1)
	{
		alert("The wrap width has to be greater than 1!");
		return;
	}
	WrapWidth= width
	elm = getMyElement('leftWrap');
	elm.height=MasterHeight*SizeMultiplier;
	elm.width=WrapWidth*SizeMultiplier;
	elm = getMyElement('leftWrapImg');
	elm.height=MasterHeight*SizeMultiplier;
	elm.width=WrapWidth*SizeMultiplier;
	elm = getMyElement('rightWrap');
	elm.height=MasterHeight*SizeMultiplier;
	elm.width=WrapWidth*SizeMultiplier;
	elm = getMyElement('rightWrapImg');
	elm.height=MasterHeight*SizeMultiplier;
	elm.width=WrapWidth*SizeMultiplier;
}

function newSize(){
	var mulitplier;
	elm = getMyElement('oSize');
	mulitplier = elm.value;
	if (! validateInt(mulitplier) )
	{
		alert("The image size multiplier has to be a number!");
		return;
	}
	SizeMultiplier = mulitplier;
	elm = getMyElement('leftWrap');
		elm.height=20*SizeMultiplier;
	  elm.width=	GuideWrapWidth*SizeMultiplier;
	elm = getMyElement('leftWrapImg');
		elm.height=20*SizeMultiplier;
		elm.width=	GuideWrapWidth*SizeMultiplier;
	elm = getMyElement('rightWrap');
		elm.height=20*SizeMultiplier;
		elm.width=	GuideWrapWidth*SizeMultiplier;
	elm = getMyElement('rightWrapImg');
		elm.height=20*SizeMultiplier;
		elm.width=	GuideWrapWidth*SizeMultiplier;
  elm = getMyElement('leftUnderwrapImg');
		elm.height=20*SizeMultiplier;
		elm.width=	UnderWrapWidth*SizeMultiplier;
	elm = getMyElement('leftInnerUnderwrapImg');
		elm.height=20*SizeMultiplier;
		elm.width=UnderWrapWidth*SizeMultiplier;
	elm = getMyElement('rightInnerUnderwrapImg');
		elm.height=20*SizeMultiplier;
		elm.width=UnderWrapWidth*SizeMultiplier;
	elm = getMyElement('rightUnderwrapImg');
		elm.width=UnderWrapWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
  elm = getMyElement('leftOuterTrim');
		elm.width=OuterTrimWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
	elm = getMyElement('leftOuterTrimImg');
		elm.width=OuterTrimWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
	elm = getMyElement('rightOuterTrim');
		elm.width=OuterTrimWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
	elm = getMyElement('rightOuterTrimImg');
		elm.width=OuterTrimWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
  elm = getMyElement('leftInnerTrim');
		elm.width=InnerTrimWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
	elm = getMyElement('rightInnerTrim');
		elm.width=InnerTrimWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
	elm = getMyElement('leftInnerTrimImg');
		elm.width=InnerTrimWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
	elm = getMyElement('rightInnerTrimImg');
		elm.width=InnerTrimWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
  elm = getMyElement('leftCenterTrim');
		elm.width=OuterCenterTrimWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
	elm = getMyElement('rightCenterTrim');
		elm.width=OuterCenterTrimWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
	elm = getMyElement('leftCenterTrimImg');
		elm.width=OuterCenterTrimWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
	elm = getMyElement('rightCenterTrimImg');
		elm.width=OuterCenterTrimWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
  elm = getMyElement('centerTrim');
		elm.width=CenterTrimWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
	elm = getMyElement('centerTrimImg');
		elm.width=CenterTrimWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
  elm = getMyElement('leftInnerUnderwrap');
		elm.width=InnerUnderWrapWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
	elm = getMyElement('rightInnerUnderwrap');
		elm.width=InnerUnderWrapWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
	elm = getMyElement('leftInnerUnderwrapImg');
		elm.width=InnerUnderWrapWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
	elm = getMyElement('rightInnerUnderwrapImg');
		elm.width=InnerUnderWrapWidth*SizeMultiplier;
		elm.height=20*SizeMultiplier;
  elm = getMyElement('leftBlank');
		elm.height=MasterHeight*SizeMultiplier;
		elm.width=BlankWidth*SizeMultiplier;
	elm = getMyElement('rightBlank');
		elm.height=MasterHeight*SizeMultiplier;
		elm.width=BlankWidth*SizeMultiplier;
}


function newD2CT(){
	var width;
	elm = getMyElement('oD2CT');
	width = elm.value;
	if (! validateInt(width) )
	{
		alert("The distance between the outer and center trim bands has to be a number!");
		return;
	}
	InnerUnderWrapWidth=width;
	elm = getMyElement('leftInnerUnderwrap');
		elm.width=InnerUnderWrapWidth*SizeMultiplier;
	elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('rightInnerUnderwrap');
		elm.width=InnerUnderWrapWidth*SizeMultiplier;
	elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('leftInnerUnderwrapImg');
		elm.width=InnerUnderWrapWidth*SizeMultiplier;
	elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('rightInnerUnderwrapImg');
		elm.width=InnerUnderWrapWidth*SizeMultiplier;
	elm.height=MasterHeight*SizeMultiplier;
}

function newCTrim(){
	var color;
	elm = getMyElement('oCTrim');
	color = elm.value;
	if (color == "None")
	{
		elm = getMyElement('oCTWidth');
		elm.value = 0;
		color = underwrapcolor;
	}
	elm = getMyElement('centerTrimImg');
	elm.height=MasterHeight*SizeMultiplier;
	elm.src=color;
}

function newOCTrim(){
	var color;
	elm = getMyElement('oOCTrim');
	color = elm.value;
	if (color == "None")
	{
		color = underwrapcolor;
	}
	elm = getMyElement('leftCenterTrimImg');
	elm.src=color;
	elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('rightCenterTrimImg');
	elm.src=color;
	elm.height=MasterHeight*SizeMultiplier;
}

function newWrap(){
	var color;
	elm = getMyElement('oWrap');
	color = elm.value;
	wrapcolor = color;
	elm = getMyElement('leftWrapImg');
	elm.src=color;
	elm.height=MasterHeight*SizeMultiplier;
	elm = getMyElement('rightWrapImg');
	elm.src=color;
	elm.height=MasterHeight*SizeMultiplier;
}

function init(){

  InitColors();

	elm = getMyElement('oblankcolor');
	elm.selectedIndex=1;
	newblank()

	AddColors('oUnderwrap');
	elm = getMyElement('oUnderwrap');
	elm.selectedIndex=34;
	newUnderwrap();

	AddColors('oWrap');
	elm = getMyElement('oWrap');
	elm.selectedIndex=55;
	newWrap();
// add colors
//
	AddColors('oITrim');
	elm = getMyElement('oITrim');
	elm.selectedIndex=51;
	newITrim();
	elm = getMyElement('oITWidth');
	elm.value = 3;
	InnerTrimWidth = 3;
	newITWidth();
// add colors
//
	AddColors('oOTrim');
	elm = getMyElement('oOTrim');
	elm.selectedIndex=34;
	newOTrim();
	elm = getMyElement('oOTWidth');
	elm.value = 3;
	OuterTrimWidth = 3
	newOTWidth();

	AddColors('oCTrim');
	elm = getMyElement('oCTrim');
	elm.selectedIndex=51;
	newCTrim();
	elm = getMyElement('oCTWidth');
	elm.value = 6;
	newCTWidth();

	AddColors('oOCTrim');
	elm = getMyElement('oOCTrim');
	elm.selectedIndex=51;
	newOCTrim();
	elm = getMyElement('oOCTWidth');
	elm.value = 2;
	newOCTWidth();
	elm = getMyElement('oD2CT');
	elm.value = 2;

	elm = getMyElement('oSize');
	elm.value = 1;

	elm = getMyElement('oWrapWidth');
	elm.value = 40;
	newWrapWidth();

  newD2CT();
}

// print window
function writeMTable(){
	 top.wRef=window.open('','myconsole',
	  'width=500,height=450,left=10,top=10'
	   +',menubar=1'
	   +',toolbar=0'
	   +',status=1'
	   +',scrollbars=1'
	   +',resizable=1');
	top.wRef.document.writeln('<html><head><title>');
	elm = getMyElement('oName');
  top.wRef.document.writeln(elm.value);
	top.wRef.document.writeln('</title></head>' +'<body bgcolor=white onLoad="self.focus()">' +'<center>' +'<H3>');
	top.wRef.document.writeln(elm.value);
	top.wRef.document.writeln('</H3>');
	top.wRef.document.writeln("Produced by Chris Stanton's<br><b>Guide Wrap Designer</b><br><br><br>");
  top.wRef.document.writeln('Blank color:');
	elm = getMyElement('oblankcolor');
	top.wRef.document.writeln(FindBlankColor(elm.value));
	top.wRef.document.writeln('<br><br>');
  top.wRef.document.writeln('Wrap color:');
	elm = getMyElement('oWrap');
	color = FindColor(elm.value);
	top.wRef.document.writeln(ColorList[color][1]);
	top.wRef.document.writeln('<br>');
	top.wRef.document.writeln('Wrap length:');
	elm = getMyElement('oWrapWidth');
	top.wRef.document.writeln(elm.value);
	top.wRef.document.writeln('<br><br>');
  top.wRef.document.writeln('Underwrap color:');
	elm = getMyElement('oUnderwrap');
	color = FindColor(elm.value);
	top.wRef.document.writeln(ColorList[color][1]);
	top.wRef.document.writeln('<br><br>');
  top.wRef.document.writeln('Outer trim band color:');
	elm = getMyElement('oOTrim');
	color = FindColor(elm.value);
	top.wRef.document.writeln(ColorList[color][1]);
	top.wRef.document.writeln('<br>');
	top.wRef.document.writeln('Outer trim band width:');
	elm = getMyElement('oOTWidth');
	top.wRef.document.writeln(elm.value);
	top.wRef.document.writeln('<br><br>');
  top.wRef.document.writeln('Inner trim band color:');
	elm = getMyElement('oITrim');
	color = FindColor(elm.value);
	top.wRef.document.writeln(ColorList[color][1]);
	top.wRef.document.writeln('<br>');
	top.wRef.document.writeln('Inner trim band width:');
	elm = getMyElement('oITWidth');
	top.wRef.document.writeln(elm.value);
	top.wRef.document.writeln('<br><br>');
  top.wRef.document.writeln('Center trim band color:');
	elm = getMyElement('oCTrim');
	color = FindColor(elm.value);
	top.wRef.document.writeln(ColorList[color][1]);
	top.wRef.document.writeln('<br>');
	top.wRef.document.writeln('Center Trim band width:');
	elm = getMyElement('oCTWidth');
	top.wRef.document.writeln(elm.value);
	top.wRef.document.writeln('<br><br>');
	top.wRef.document.writeln('Outer center trim band color:');
	elm = getMyElement('oOCTrim');
	color = FindColor(elm.value);
	top.wRef.document.writeln(ColorList[color][1]);
	top.wRef.document.writeln('<br>');
	top.wRef.document.writeln('Outer center trim band width:');
	elm = getMyElement('oOCTWidth');
	top.wRef.document.writeln(elm.value);
	top.wRef.document.writeln('<br>');
	top.wRef.document.writeln('Distance to center trim band:');
	elm = getMyElement('oD2CT');
	top.wRef.document.writeln(elm.value);
	top.wRef.document.writeln('<br><br>');
  top.wRef.document.writeln('</center></body></html>')
  top.wRef.window.print();
  top.wRef.document.close()
}

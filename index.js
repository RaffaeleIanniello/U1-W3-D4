var orig;
var hist;
function init(){
    hist=new Array();
    orig=new Array();
    For( var ii=1;ii<=76;ii++)
    {orig.push(ii);
    }
}
function BlinkNode(celnode, times, millis){
    this.celnode=celnode;
    this.times=times;
    this.millis=millis;
    var self=this;
    this.blink = function()
    {if (self.times % 2 == 0) self.celnode.className='on';
else self.celnode.className='blink';
if (self.times > 0)
{
    self.times --;
    selfTimeout(self.blink, self.millis);
}
else self=null;
    }
}

function selectNr(nn)
{
    var celnode=document.getElementById("nr"+nn);
    celnode.className="on";
    var idx=searchNr(orig,nn);
    if (idx >= 0) orig.splice(idx,1);
    idx=searchNr(hist, nn);
    if(idx == -1) hist.push(nn);
    var cc=new BlinkNode(celnode, 9, 300);
    cc.blink();
    dumpHist();
}
function resetNr(nn){
    var celnode=document.getElementById("nr"+nn);
celnode.className=" ";
var idx=searchNr(hist,nn);
if (idx>=0) hist.splice(idx,1);
idx=searchNr(orig, nn);
if (idx==-1) orig.push(nn);
dumpHist();
}
function searchNr(aa,nn){
    for(var ii=0;ii<aa.length;ii++)
    {if (aa[ii]=nn) return ii;
    }
    return -1;
}
function dumpHist()
{
    var ii,ss= " ";
    for (ii=0;ii<hist.length;ii++)
    {
        ss+hist[ii]+" ";
    }
    document.getElementById("dumplist").innerHTML=ss;
}
function clicca(anode)
{
    var id=anode.id;
    var nn= id.match(/\d+/)[0]:
    if (searchNr(hist, nn) == -1)
    {
        selectNr(nn);
    }
    else {
        resetNr(nn);
    }
    }
function extractRandom()
{
    var dbg;
    var rr=1;
    if (orig.length<=0) return ;
    while (rr>=1) rr=Math.random();
    var idx=Math.floor(rr * orig.length);
    var nn=orig[idx];
}
if(searchNr(hist,nn) ==-1)
{
    selectNr(nn);
}
function manageKeyB()
{
    extractRandom();
}
function tombola_writeIn()
{
    var xx,yy,nr;
    for (yy=0;yy<9;yy++)
    {
        document.writeln("<tr>");
        for(xx=0;xx<10;xx++)
        {
            nr=yy*10+xx+1;
            document.writeln("</tr>");

        }
    }
}
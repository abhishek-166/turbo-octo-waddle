function Vector2(x = 0,y = 0){
    this.x =x;
    this.y = y
}

Vector2.prototype.copy = function(){
    return new Vector2(this.x,this.y);
}

Vector2.prototype.add = function(vector){
    this.x += vector.x;
    this.y += vector.y;
}

Vector2.prototype.addTo = function(vector){
    return new Vector2(this.x+vector.x,this.y+vector.y);
}

Vector2.prototype.sub = function(vector){
    return new Vector2(this.x-vector.x,this.y-vector.y);
}

Vector2.prototype.multi = function(delta){
    return new Vector2(this.x*delta,this.y*delta);
}

Vector2.prototype.dot = function(vector){
    return this.x * vector.x + this.y * vector.y;
}

Vector2.prototype.length = function(){
    return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
}

Vector2.prototype.distanceFrom = function(obj){
    return Math.sqrt((this.x-obj.x)*(this.x-obj.x) + (this.y-obj.y)*(this.y-obj.y));
}

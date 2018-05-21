// 1. should create an empty SortedList
function SortedList() {
    this.items =[];
    this.length = this.items.length;
    }


/*  #add(x)
    2. should add a single value to SortedList
    3. should add a second value to SortedList, sorted
    4. should add a third value to SortedList, sorted
 */
SortedList.prototype.add = function(x) {
    this.items.push(x);
    this.length = this.items.length;
    this.items.sort(function (a, b) {
        return a - b;
    });
}


// 5.  #get(i), should return the element in that position
SortedList.prototype.get = function(pos) {
    return this.items[pos - 1];
}


// 6.  should return the max element in the list
SortedList.prototype.max = function() {
    return Math.max(...this.items); // this returns its contents, without the array itself.
     
}


// 7.  should return the min element in the list
SortedList.prototype.min = function() {
    return Math.min(...this.items);
}


// 8. should return the average of elements in the array
SortedList.prototype.average = function() {
    var sum = 0;
    if (this.items.length > 0) {
        for (var i = 0; i < this.items.length; i++) {
            sum = sum + this.items[i];
        }
    }
    return sum / this.items.length 
}

// 9. should add(sum) all elements of the array if there are elements in the list
SortedList.prototype.sum     = function() {
    var sum = 0;
    if (this.items.length > 0) {
        for (var i = 0; i < this.items.length; i++) {
            sum = sum + this.items[i];
        }
    }
    return sum 
}

module.exports = SortedList;

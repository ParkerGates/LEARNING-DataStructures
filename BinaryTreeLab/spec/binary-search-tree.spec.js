describe('BST', function () {
  var bst;
  beforeEach(function () {
    bst = new BinarySearchTree();
  });
  describe('insert', () => {
    it('should insert element with key 8 correctly', function () {
      bst.insert({
        key: 8,
        data: {
          name: 'number',
        },
      });
      expect(bst.find(8)).toBeTruthy();
    });
    it('should insert elements with key 8, 10, 3 correctly', function () {
      bst.insert({
        key: 8,
        data: {
          name: 'number',
        },
      });
      bst.insert({
        key: 10,
        data: {
          name: 'number',
        },
      });
      bst.insert({
        key: 3,
        data: {
          name: 'number',
        },
      });
      expect(bst.find(8)).toBeTruthy();
      expect(bst.find(10)).toBeTruthy();
      expect(bst.find(3)).toBeTruthy();
    });
    it('should insert elements with key 8, 10, 3, 1, 6, 14 correctly', function () {
      bst.insert({
        key: 8,
        data: {
          name: 'number',
        },
      });
      bst.insert({
        key: 10,
        data: {
          name: 'number',
        },
      });
      bst.insert({
        key: 3,
        data: {
          name: 'number',
        },
      });
      bst.insert({
        key: 1,
        data: {
          name: 'number',
        },
      });
      bst.insert({
        key: 6,
        data: {
          name: 'number',
        },
      });
      bst.insert({
        key: 14,
        data: {
          name: 'number',
        },
      });
      bst.insert({
        key: 13,
        data: {
          name: 'number',
        },
      });
      expect(bst.find(8)).toBeTruthy();
      expect(bst.find(10)).toBeTruthy();
      expect(bst.find(3)).toBeTruthy();
      expect(bst.find(1)).toBeTruthy();
      expect(bst.find(6)).toBeTruthy();
      expect(bst.find(14)).toBeTruthy();
      expect(bst.find(13)).toBeTruthy();
    });
  });


  describe('find', () => {
    it('should find element with key 8 correctly', function () {
      bst.insert({
        key: 8,
        data: {
          name: 'eight',
        },
      });
      expect(bst.find(8)).toBeTruthy();
    });
    it('should find elements with key 8, 10, 3 correctly', function () {
      bst.insert({
        key: 8,
        data: {
          name: 'eight',
        },
      });
      bst.insert({
        key: 10,
        data: {
          name: 'ten',
        },
      });
      bst.insert({
        key: 3,
        data: {
          name: 'three',
        },
      });
      expect(bst.find(8)).toBeTruthy();
      expect(bst.find(10)).toBeTruthy();
      expect(bst.find(3)).toBeTruthy();
    });
    it('should find elements with key 8, 10, 3, 1, 6, 14 correctly', function () {
      bst.insert({
        key: 8,
        data: {
          name: 'eight',
        },
      });
      bst.insert({
        key: 10,
        data: {
          name: 'ten',
        },
      });
      bst.insert({
        key: 3,
        data: {
          name: 'three',
        },
      });
      bst.insert({
        key: 1,
        data: {
          name: 'one',
        },
      });
      bst.insert({
        key: 6,
        data: {
          name: 'six',
        },
      });
      bst.insert({
        key: 14,
        data: {
          name: 'fourteen',
        },
      });
      bst.insert({
        key: 13,
        data: {
          name: 'thirteen',
        },
      });
      expect(bst.find(8)).toBeTruthy();
      expect(bst.find(10)).toBeTruthy();
      expect(bst.find(3)).toBeTruthy();
      expect(bst.find(1)).toBeTruthy();
      expect(bst.find(6)).toBeTruthy();
      expect(bst.find(14)).toBeTruthy();
      expect(bst.find(13)).toBeTruthy();
    });
  });




  describe('toArray', () => {
    it('should return and array with data three, eight, and ten correctly', function () {
      bst.insert({
        key: 8,
        data: {
          name: 'eight',
        },
      });
      bst.insert({
        key: 10,
        data: {
          name: 'ten',
        },
      });
      bst.insert({
        key: 3,
        data: {
          name: 'three',
        },
      });
      const array = bst.toArray();
      expect(array[0].data.name).toEqual('three');
      expect(array[1].data.name).toEqual('eight');
      expect(array[2].data.name).toEqual('ten');
    });
    it('should return and array with data one, three, six, eight, ten, thirteen, fourteen correctly', function () {
      bst.insert({
        key: 8,
        data: {
          name: 'eight',
        },
      });
      bst.insert({
        key: 10,
        data: {
          name: 'ten',
        },
      });
      bst.insert({
        key: 3,
        data: {
          name: 'three',
        },
      });
      bst.insert({
        key: 1,
        data: {
          name: 'one',
        },
      });
      bst.insert({
        key: 6,
        data: {
          name: 'six',
        },
      });
      bst.insert({
        key: 14,
        data: {
          name: 'fourteen',
        },
      });
      bst.insert({
        key: 13,
        data: {
          name: 'thirteen',
        },
      });
      const array = bst.toArray();
      expect(array[0].data.name).toEqual('one');
      expect(array[1].data.name).toEqual('three');
      expect(array[2].data.name).toEqual('six');
      expect(array[3].data.name).toEqual('eight');
      expect(array[4].data.name).toEqual('ten');
      expect(array[5].data.name).toEqual('thirteen');
      expect(array[6].data.name).toEqual('fourteen');
    });
  });
});

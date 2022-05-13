describe('Linked List', () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('insert', () => {
    it('should contain the number 5 when 5 is inserted', () => {
      linkedList.insert(5);
      expect(linkedList.contains(5)).toEqual(true);
    });
    it('should contain the number 5 and 7 when 5 and 7 are inserted', () => {
      linkedList.insert(5);
      linkedList.insert(7);
      expect(linkedList.contains(5)).toEqual(true);
      expect(linkedList.contains(7)).toEqual(true);
    });
    it('should contain the number 5 and 7 and 13 when 5 and 7 and 13 are inserted', () => {
      linkedList.insert(5);
      linkedList.insert(7);
      linkedList.insert(13);
      expect(linkedList.contains(5)).toEqual(true);
      expect(linkedList.contains(7)).toEqual(true);
      expect(linkedList.contains(13)).toEqual(true);
    });
    it('should have size of 1 when inserting one item', () => {
      linkedList.insert(5);
      expect(linkedList.size()).toEqual(1);
    });
  });

  describe('remove', () => {
    it('should not contain the number 5 when 5 is inserted and then removed', () => {
      linkedList.insert(5);
      expect(linkedList.contains(5)).toEqual(true);
      linkedList.remove(5);
      expect(linkedList.contains(5)).toEqual(false);
    });
    it('should not contain the number 7 when 5, 7 and 13 are inserted and then 7 is removed', () => {
      linkedList.insert(5);
      linkedList.insert(7);
      linkedList.insert(13);
      linkedList.remove(7);
      expect(linkedList.contains(5)).toEqual(true);
      expect(linkedList.contains(7)).toEqual(false);
      expect(linkedList.contains(13)).toEqual(true);
    });
    it('should decrease the size when an item is removed', () => {
      linkedList.insert(5);
      linkedList.insert(7);
      linkedList.insert(13);
      expect(linkedList.size()).toEqual(3);
      linkedList.remove(7);
      expect(linkedList.size()).toEqual(2);
    });
    it('should have size of 0 when inserting one item and then removing one item', () => {
      linkedList.insert(5);
      expect(linkedList.size()).toEqual(1);
      linkedList.remove(5);
      expect(linkedList.size()).toEqual(0);
    });
  });

  describe('size', () => {
    it('should return 5 when 5 items are inserted', () => {
      linkedList.insert(5);
      linkedList.insert(7);
      linkedList.insert(13);
      linkedList.insert(3);
      linkedList.insert(27);
      expect(linkedList.size()).toEqual(5);
    });
    it('should return 3 when 5 items are inserted but then 2 are removed', () => {
      linkedList.insert(5);
      linkedList.insert(7);
      linkedList.insert(13);
      linkedList.insert(3);
      linkedList.insert(27);
      expect(linkedList.size()).toEqual(5);
      linkedList.remove(13);
      linkedList.remove(7);
      expect(linkedList.size()).toEqual(3);
    });
    it('should have size of 0 when nothing has been inserted', () => {
      expect(linkedList.size()).toEqual(0);
    });
  });

  describe('contains', () => {
    it('should find the number 5 when 5 is inserted', () => {
      linkedList.insert(5);
      expect(linkedList.contains(5)).toEqual(true);
    });
    it('should find the number 5 and 7 when 5 and 7 are inserted', () => {
      linkedList.insert(5);
      linkedList.insert(7);
      expect(linkedList.contains(5)).toEqual(true);
      expect(linkedList.contains(7)).toEqual(true);
    });
    it('should find the number 5, 7 and 13 when they are inserted', () => {
      linkedList.insert(5);
      linkedList.insert(7);
      linkedList.insert(13);
      expect(linkedList.contains(5)).toEqual(true);
      expect(linkedList.contains(7)).toEqual(true);
      expect(linkedList.contains(13)).toEqual(true);
    });
    it('should return false for the number 5 when only 7 and 13 are inserted', () => {
      linkedList.insert(7);
      linkedList.insert(13);
      expect(linkedList.contains(5)).toEqual(false);
    });
  });
});

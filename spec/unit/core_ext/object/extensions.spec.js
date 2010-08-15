
describe 'Object'
  describe '.merge()'
    it 'should merge the given objects'
      var a = {}
      var b = { foo: 'bar' }
      Object.merge(a, b).should.equal a
      a.foo.should.eql 'bar'
    end

    it 'should give the object being merged precendence'
      var a = { foo: 'foo' }
      var b = { foo: 'bar' }
      Object.merge(a, b).should.equal a
      a.foo.should.eql 'bar'
    end
    
    it 'should work when the second argument is undefined'
      Object.merge({ foo: 'bar' }).should.eql { foo: 'bar' }
    end
  end
  
  describe '.values()'
    it 'should return the values of an object as an array'
      Object.values({ foo: 'bar', baz: 'raz' }).should.eql ['bar', 'raz']
    end
    
    it 'should return an empty array when non-object is passed'
      Object.values(0).should.eql []
      Object.values([]).should.eql  []
      Object.values(null).should.eql  []
      Object.values().should.eql []
    end
  end
  
  describe '.mergeDeep()'
    it 'should perform a deep merge'
      var a = { user: { name: { first: 'tj' }}}
      var b = { user: { name: { last: 'holowaychuk' }}}
      Object.mergeDeep(a, b).should.equal a
      a.should.eql { user: { name: { first: 'tj', last: 'holowaychuk' }}}
    end
    
    it 'should give the object being merged precendence'
      var a = { user: { name: { first: 'tj' }}}
      var b = { user: { name: { first: 'simon' }}}
      Object.mergeDeep(a, b).should.equal a
      a.should.eql { user: { name: { first: 'simon' }}}
    end
    
    it 'should work when keys are not available on the source object'
      var a = {}
      var b = { user: { name: { first: 'simon' }}}
      Object.mergeDeep(a, b).should.equal a
      a.should.eql { user: { name: { first: 'simon' }}}
    end
    
    it 'should work when an undefined object is passed'
      Object.mergeDeep({ foo: 'bar' }).should.eql { foo: 'bar' }
    end
  end

  describe '.isEmpty()'
    it 'should detect if a object is empty'
      Object.isEmpty({}).should.eql true
      Object.isEmpty([]).should.eql true
      Object.isEmpty(null).should.eql true
      Object.isEmpty(false).should.eql true
      Object.isEmpty(undefined).should.eql true
      Object.isEmpty({foo:'bar'}).should.eql false
      Object.isEmpty('foo').should.eql false
      Object.isEmpty(10).should.eql false
      Object.isEmpty(0).should.eql false
    end
  end


  describe '.clone()'
    it 'should perform a clone'
      var a = { user: { name: { first: 'pau' }}}
      var b = Object.clone(a);

      a.user.should.eql b.user
      a.user.name.first.should.eql b.user.name.first

      b.user.name.first = 'tj';
      a.user.name.first.should.eql 'pau'
      b.user.name.first.should.eql 'tj'

      delete b.user
      a.user.should.not.be undefined
      b.user.should.be undefined
    end

    it 'should deal with Date, Regex, Function, Booleans ...'
      var a = {x: new Date(), y: /.*/, z:function(){return 'foo'}, foo: false}
      var b = Object.clone(a);

      a.should.eql b
      a.x.should.eql b.x
      a.x.constructor.should.eql b.x.constructor

      a.y.should.eql b.y
      a.y.constructor.should.eql b.y.constructor

      a.z.should.eql b.z
      a.z.constructor.should.eql b.z.constructor

      a.foo.should.eql b.foo
      a.foo.constructor.should.eql b.foo.constructor
    end
  end
end

var obj   = {},
    ary   = [],
    str   = '',
    func  = function(){},
    num   = 0,
    date  = new Date(),
    bool  = true,
    Null  = null,
    undef = undefined;

describe('OBJECT', function(){
  var test = obj;
  it('OBJECT is true', function(){
    expect(callType(test)).toBe('OBJECT');
  });
  it('ARRAY is false', function(){
    expect(callType(test)).not.toBe('ARRAY');
  });
  it('STRING is false', function(){
    expect(callType(test)).not.toBe('STRING');
  });
  it('FUNCTION is false', function(){
    expect(callType(test)).not.toBe('FUNCTION');
  });
  it('NUMBER is false', function(){
    expect(callType(test)).not.toBe('NUMBER');
  });
  it('DATE is false', function(){
    expect(callType(test)).not.toBe('DATE');
  });
  it('BOOLEAN is false', function(){
    expect(callType(test)).not.toBe('BOOLEAN');
  });
  it('NULL is false', function(){
    expect(callType(test)).not.toBe('NULL');
  });
  it('UNDEFINED is false', function(){
    expect(callType(test)).not.toBe('UNDEFINED');
  });
});

describe('ARRAY', function(){
  var test = ary;
  it('OBJECT is false', function(){
    expect(callType(test)).not.toBe('OBJECT');
  });
  it('ARRAY is true', function(){
    expect(callType(test)).toBe('ARRAY');
  });
  it('STRING is false', function(){
    expect(callType(test)).not.toBe('STRING');
  });
  it('FUNCTION is false', function(){
    expect(callType(test)).not.toBe('FUNCTION');
  });
  it('NUMBER is false', function(){
    expect(callType(test)).not.toBe('NUMBER');
  });
  it('DATE is false', function(){
    expect(callType(test)).not.toBe('DATE');
  });
  it('BOOLEAN is false', function(){
    expect(callType(test)).not.toBe('BOOLEAN');
  });
  it('NULL is false', function(){
    expect(callType(test)).not.toBe('NULL');
  });
  it('UNDEFINED is false', function(){
    expect(callType(test)).not.toBe('UNDEFINED');
  });
});

describe('STRING', function(){
  var test = str;
  it('OBJECT is false', function(){
    expect(callType(test)).not.toBe('OBJECT');
  });
  it('ARRAY is false', function(){
    expect(callType(test)).not.toBe('ARRAY');
  });
  it('STRING is true', function(){
    expect(callType(test)).toBe('STRING');
  });
  it('FUNCTION is false', function(){
    expect(callType(test)).not.toBe('FUNCTION');
  });
  it('NUMBER is false', function(){
    expect(callType(test)).not.toBe('NUMBER');
  });
  it('DATE is false', function(){
    expect(callType(test)).not.toBe('DATE');
  });
  it('BOOLEAN is false', function(){
    expect(callType(test)).not.toBe('BOOLEAN');
  });
  it('NULL is false', function(){
    expect(callType(test)).not.toBe('NULL');
  });
  it('UNDEFINED is false', function(){
    expect(callType(test)).not.toBe('UNDEFINED');
  });
});

describe('FUNCTION', function(){
  var test = func;
  it('OBJECT is false', function(){
    expect(callType(test)).not.toBe('OBJECT');
  });
  it('ARRAY is false', function(){
    expect(callType(test)).not.toBe('ARRAY');
  });
  it('STRING is false', function(){
    expect(callType(test)).not.toBe('STRING');
  });
  it('FUNCTION is true', function(){
    expect(callType(test)).toBe('FUNCTION');
  });
  it('NUMBER is false', function(){
    expect(callType(test)).not.toBe('NUMBER');
  });
  it('DATE is false', function(){
    expect(callType(test)).not.toBe('DATE');
  });
  it('BOOLEAN is false', function(){
    expect(callType(test)).not.toBe('BOOLEAN');
  });
  it('NULL is false', function(){
    expect(callType(test)).not.toBe('NULL');
  });
  it('UNDEFINED is false', function(){
    expect(callType(test)).not.toBe('UNDEFINED');
  });
});

describe('NUMBER', function(){
  var test = num;
  it('OBJECT is false', function(){
    expect(callType(test)).not.toBe('OBJECT');
  });
  it('ARRAY is false', function(){
    expect(callType(test)).not.toBe('ARRAY');
  });
  it('STRING is false', function(){
    expect(callType(test)).not.toBe('STRING');
  });
  it('FUNCTION is false', function(){
    expect(callType(test)).not.toBe('FUNCTION');
  });
  it('NUMBER is false', function(){
    expect(callType(test)).toBe('NUMBER');
  });
  it('DATE is false', function(){
    expect(callType(test)).not.toBe('DATE');
  });
  it('BOOLEAN is false', function(){
    expect(callType(test)).not.toBe('BOOLEAN');
  });
  it('NULL is false', function(){
    expect(callType(test)).not.toBe('NULL');
  });
  it('UNDEFINED is false', function(){
    expect(callType(test)).not.toBe('UNDEFINED');
  });
});

describe('DATE', function(){
  var test = date;
  it('OBJECT is false', function(){
    expect(callType(test)).not.toBe('OBJECT');
  });
  it('ARRAY is false', function(){
    expect(callType(test)).not.toBe('ARRAY');
  });
  it('STRING is false', function(){
    expect(callType(test)).not.toBe('STRING');
  });
  it('FUNCTION is false', function(){
    expect(callType(test)).not.toBe('FUNCTION');
  });
  it('NUMBER is false', function(){
    expect(callType(test)).not.toBe('NUMBER');
  });
  it('DATE is false', function(){
    expect(callType(test)).toBe('DATE');
  });
  it('BOOLEAN is false', function(){
    expect(callType(test)).not.toBe('BOOLEAN');
  });
  it('NULL is false', function(){
    expect(callType(test)).not.toBe('NULL');
  });
  it('UNDEFINED is false', function(){
    expect(callType(test)).not.toBe('UNDEFINED');
  });
});

describe('BOOLEAN', function(){
  var test = bool;
  it('OBJECT is false', function(){
    expect(callType(test)).not.toBe('OBJECT');
  });
  it('ARRAY is false', function(){
    expect(callType(test)).not.toBe('ARRAY');
  });
  it('STRING is false', function(){
    expect(callType(test)).not.toBe('STRING');
  });
  it('FUNCTION is false', function(){
    expect(callType(test)).not.toBe('FUNCTION');
  });
  it('NUMBER is false', function(){
    expect(callType(test)).not.toBe('NUMBER');
  });
  it('DATE is false', function(){
    expect(callType(test)).not.toBe('DATE');
  });
  it('BOOLEAN is true', function(){
    expect(callType(test)).toBe('BOOLEAN');
  });
  it('NULL is false', function(){
    expect(callType(test)).not.toBe('NULL');
  });
  it('UNDEFINED is false', function(){
    expect(callType(test)).not.toBe('UNDEFINED');
  });
});

describe('NULL', function(){
  var test = Null;
  it('OBJECT is false', function(){
    expect(callType(test)).not.toBe('OBJECT');
  });
  it('ARRAY is false', function(){
    expect(callType(test)).not.toBe('ARRAY');
  });
  it('STRING is false', function(){
    expect(callType(test)).not.toBe('STRING');
  });
  it('FUNCTION is false', function(){
    expect(callType(test)).not.toBe('FUNCTION');
  });
  it('NUMBER is false', function(){
    expect(callType(test)).not.toBe('NUMBER');
  });
  it('DATE is false', function(){
    expect(callType(test)).not.toBe('DATE');
  });
  it('BOOLEAN is false', function(){
    expect(callType(test)).not.toBe('BOOLEAN');
  });
  it('NULL is true', function(){
    expect(callType(test)).toBe('NULL');
  });
  it('UNDEFINED is false', function(){
    expect(callType(test)).not.toBe('UNDEFINED');
  });
});

describe('UNDEFINED', function(){
  var test = undef;
  it('OBJECT is false', function(){
    expect(callType(test)).not.toBe('OBJECT');
  });
  it('ARRAY is false', function(){
    expect(callType(test)).not.toBe('ARRAY');
  });
  it('STRING is false', function(){
    expect(callType(test)).not.toBe('STRING');
  });
  it('FUNCTION is false', function(){
    expect(callType(test)).not.toBe('FUNCTION');
  });
  it('NUMBER is false', function(){
    expect(callType(test)).not.toBe('NUMBER');
  });
  it('DATE is false', function(){
    expect(callType(test)).not.toBe('DATE');
  });
  it('BOOLEAN is false', function(){
    expect(callType(test)).not.toBe('BOOLEAN');
  });
  it('NULL is false', function(){
    expect(callType(test)).not.toBe('NULL');
  });
  it('UNDEFINED is true', function(){
    expect(callType(test)).toBe('UNDEFINED');
  });
});
import Jatekter from "../Jatekter.js";

QUnit.module('Játéktér ellenőrzés metódusainak tesztelése', function(hooks) {
    let jatekter;

    hooks.before(() => {
        jatekter = new Jatekter();
    }); 

    QUnit.test('létezik-e', function(assert) {

      assert.ok(jatekter.ellenorzes, "Létezik-e a ellenorzes()?");
      assert.ok(jatekter.getAtlo, "Létezik-e a getAtlo()?");
      assert.ok(jatekter.getFuggoleges, "Létezik-e a getFuggoleges()?");
      assert.ok(jatekter.getVizszintes, "Létezik-e a getVizszintes()?");
    });

    QUnit.test('függvény-e', function(assert) {
        assert.ok(typeof(jatekter.ellenorzes) === "function", "Függvény-e?");
        assert.ok(typeof(jatekter.getAtlo) === "function", "Függvény-e?");
        assert.ok(typeof(jatekter.getFuggoleges) === "function", "Függvény-e?");
        assert.ok(typeof(jatekter.getVizszintes) === "function", "Függvény-e?");
    });

});

QUnit.module('Játéktér getVizszinzes metódus tesztelése', function(hooks) {
    let jatekter;

    hooks.before(() => {
        jatekter = new Jatekter();
    }); 

    QUnit.test('getVizszintes()', function(assert) {
        const TESZTESETEK = [
            {
                lista : [" ", " ", " ", " ", " ", " ", " ", " ", " "],
                vart : "   @   @   @",
                nev : "Üres lista"
            },
            //Egymás mellett 3X
            {
                lista : ["X", "X", "X", "O", " ", "O", " ", " ", " "],
                vart : "XXX@O O@   @",
                nev : "Egymás mellett 3X"
            },
            //Egymás mellett 3O
            {
                lista : ["X", " ", "X", "O", "O", "O", " ", "X", " "],
                vart : "X X@OOO@ X @",
                nev : "Egymás mellett 3O"
            },
            //véletlen elrendezés, de nincs nyerés
            {
                lista : ["X", "O", "X", "O", "X", "O", "O", "X", " "],
                vart : "XOX@OXO@OX @",
                nev : "Véletlen elrendezés, de nincs nyerés"
            },
            //minden ki van töltve, de nincs nyerés
            {
                lista : ["X", "O", "X", "O", "X", "O", "O", "X", "X"],
                vart : "XOX@OXO@OXX@",
                nev : "Minden ki van töltve, de nincs nyerés"
            },
            //minden ki van töltve és van nyerés
            {
                lista : ["X", "O", "X", "X", "O", "O", "X", "O", "X"],
                vart : "XOX@XOO@XOX@",
                nev : "Minden ki van töltve és van nyerés"
            },
            //az utolsó oszlopban és a következő sor elején van 2 elem
            {
                lista : ["O", "O", "X", "X", "X", " ", " ", " ", " "],
                vart : "OOX@XX @   @",
                nev : "Az utolsó oszlopban és a következő sor elején van 2 elem"
            }
        ];

        TESZTESETEK.forEach((teszteset) => {
            jatekter.lista = teszteset.lista;
            assert.equal(jatekter.getVizszintes(), teszteset.vart, ` ${teszteset.nev}`);

        });        
    });
});

QUnit.module('Játéktér getFuggoleges metódus tesztelése', function(hooks) {
    let jatekter;

    hooks.before(() => {
        jatekter = new Jatekter();
    }); 

    QUnit.test('getFuggoleges()', function(assert) {
        const TESZTESETEK = [
            {
                lista : [" ", " ", " ", " ", " ", " ", " ", " ", " "],
                vart : "   @   @   @",
                nev : "Üres lista"
            },
            //Egymás mellett 3X
            {
                lista : ["X", "O", "O", "X", " ", " ", "X", " ", " "],
                vart : "XXX@O  @O  @",
                nev : "Egymás alatt 3X"
            },
            //Egymás mellett 3O
            {
                lista : ["O", "X", "X", "O", " ", " ", "O", " ", "X"],
                vart : "OOO@X  @X X@",
                nev : "Egymás alatt 3O"
            },
            //véletlen elrendezés, de nincs nyerés
            {
                lista : ["X", "O", "X", "O", "X", "O", "O", "X", " "],
                vart : "XOO@OXX@XO @",
                nev : "Véletlen elrendezés, de nincs nyerés"
            },
            //minden ki van töltve, de nincs nyerés
            {
                lista : ["X", "O", "X", "O", "X", "O", "O", "X", "X"],
                vart : "XOO@OXX@XOX@",
                nev : "Minden ki van töltve, de nincs nyerés"
            },
            //minden ki van töltve és van nyerés
            {
                lista : ["X", "O", "X", "X", "O", "O", "X", "O", "X"],
                vart : "XXX@OOO@XOX@",
                nev : "Minden ki van töltve és van nyerés"
            },
            //az utolsó oszlopban és a következő sor elején van 2 elem
            {
                lista : ["O", "O", "X", "X", "X", " ", " ", " ", " "],
                vart : "OX @OX @X  @",
                nev : "Az utolsó oszlopban és a következő sor elején van 2 elem"
            }
        ];

        TESZTESETEK.forEach((teszteset) => {
            jatekter.lista = teszteset.lista;
            assert.equal(jatekter.getFuggoleges(), teszteset.vart, ` ${teszteset.nev}`);

        });        
    });
});

QUnit.module('Játéktér getAtlo metódus tesztelése', function(hooks) {
    let jatekter;

    hooks.before(() => {
        jatekter = new Jatekter();
    }); 

    QUnit.test('getFuggoleges()', function(assert) {
        const TESZTESETEK = [
            {
                lista : [" ", " ", " ", " ", " ", " ", " ", " ", " "],
                vart : "   @   ",
                nev : "Üres lista"
            },
            //Egymás mellett 3X
            {
                lista : ["X", "O", "O", " ", "X", " ", " ", " ", "X"],
                vart : "XXX@OX ",
                nev : "Egymás alatt 3X"
            },
            //Egymás mellett 3O
            {
                lista : ["O", "X", "X", " ", "O", " ", "X", " ", "O"],
                vart : "OOO@XOX",
                nev : "Egymás alatt 3O"
            },
            //véletlen elrendezés, de nincs nyerés
            {
                lista : ["X", "O", "X", "O", "X", "O", "X", "O", " "],
                vart : "XX @XXX",
                nev : "Véletlen elrendezés, de nincs nyerés"
            },
            //minden ki van töltve, de nincs nyerés
            {
                lista : ["X", "O", "X", "O", "X", "O", "X", "X", "O"],
                vart : "XXO@XXX",
                nev : "Minden ki van töltve, de nincs nyerés"
            },
            //minden ki van töltve és van nyerés
            {
                lista : ["X", "O", "X", "O", "X", "O", "X", "O", "X"],
                vart : "XXX@XXX",
                nev : "Minden ki van töltve és van nyerés"
            },
            //az utolsó oszlopban és a következő sor elején van 2 elem
            {
                lista : ["O", "O", "X", "X", "X", " ", " ", " ", " "],
                vart : "OX @XX ",
                nev : "Az utolsó oszlopban és a következő sor elején van 2 elem"
            }
        ];

        TESZTESETEK.forEach((teszteset) => {
            jatekter.lista = teszteset.lista;
            assert.equal(jatekter.getAtlo(), teszteset.vart, ` ${teszteset.nev}`);

        });        
    });
});

QUnit.module('Játéktér ellenorzes metódus tesztelése', function(hooks) {
    let jatekter;

    hooks.before(() => {
        jatekter = new Jatekter();
    }); 

    QUnit.test('getFuggoleges()', function(assert) {
        const TESZTESETEK = [
            {
                lista : [" ", " ", " ", " ", " ", " ", " ", " ", " "],
                vart : "",
                nev : "Üres lista"
            },
            //Egymás mellett 3X
            {
                lista : ["X", "O", "O", " ", "X", " ", " ", " ", "X"],
                vart : "X",
                nev : "Egymás alatt 3X"
            },
            //Egymás mellett 3O
            {
                lista : ["O", "X", "X", " ", "O", " ", "X", " ", "O"],
                vart : "O",
                nev : "Egymás alatt 3O"
            },
            //véletlen elrendezés, de nincs nyerés
            {
                lista : ["X", "O", "X", "O", "X", "O", " ", " ", " "],
                vart : "",
                nev : "Véletlen elrendezés, de nincs nyerés"
            },
            //minden ki van töltve, de nincs nyerés
            {
                lista : ["X", "O", "X", "O", "O", "X", "X", "X", "O"],
                vart : "",
                nev : "Minden ki van töltve, de nincs nyerés"
            },
            //minden ki van töltve és van nyerés
            {
                lista : ["X", "O", "X", "O", "X", "O", "X", "O", "X"],
                vart : "X",
                nev : "Minden ki van töltve és van nyerés"
            },
            //az utolsó oszlopban és a következő sor elején van 2 elem
            {
                lista : ["O", "O", "X", "X", "X", " ", " ", " ", " "],
                vart : "",
                nev : "Az utolsó oszlopban és a következő sor elején van 2 elem"
            }
        ];

        TESZTESETEK.forEach((teszteset) => {
            jatekter.lista = teszteset.lista;
            assert.equal(jatekter.ellenorzes(), teszteset.vart, ` ${teszteset.nev}`);

        });        
    });
});
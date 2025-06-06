$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform (0, 200, 800, 20);
    createPlatform (950, 200, 100, 50);
    createPlatform (1150, 200, 100, 50);
    createPlatform (300, 450, 1100, 50);
    createPlatform (300, 350, 400, 100)
    createPlatform (0, 500, 100, 20);
    createPlatform (0, 700, 1200, 20);
    createPlatform (800, 250, 450, 20);



    // TODO 3 - Create Collectables
    createCollectable("diamond", 1080, 200);
    createCollectable("steve", 0, 450);
    createCollectable("max", 1100, 650);


    
    // TODO 4 - Create Cannons
    createCannon("left", 175, 1000);
    createCannon("top", 250, 1000);
    createCannon("right", 700, 1250);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

    function solve(obj){
        if(obj.dizziness){
            let water = (0.1 * Number(obj.weight)) * obj.experience;
            obj.levelOfHydrated += water;
            obj.dizziness = false;
        }

        return obj;
    }
solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  )
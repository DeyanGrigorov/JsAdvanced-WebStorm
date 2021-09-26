function hydrate (obj) {
  let dizziness = Object.keys(obj)[Object.keys(obj).length - 1];
  let dizzinessValue = obj[dizziness];
  if (dizzinessValue === true) {
    obj['levelOfHydrated'] = ((obj['weight'] * 0.1) * obj['experience']) + obj['levelOfHydrated'];
    obj[dizziness] = false;
  }
  return obj;
}

hydrate({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true
});

hydrate({
  weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false
});
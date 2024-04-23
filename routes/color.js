
router.get('/', async (req, res) => {
  try {
    const spellCards = SpellcardModel.find();
    const trapcards = TrapCardModelModel.find();
    const colors = ColorModel.find();
    
    const [spellCardsData, trapcardsData, colorsData] = await Promise.all([spellCards, trapcards, colors]);

    res.render('product/index', {
      spellCards : spellCardsData,
      trapcards: trapcardsData,
      colors: colorsData
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
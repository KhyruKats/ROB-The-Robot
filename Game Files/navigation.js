function windowSelect(selection)
{
	if (selection == 'GameWindow')
	{
		document.getElementById('Game').className = "SelectionPane-Selected";
		document.getElementById('Upgrades').className = "SelectionPane";
		document.getElementById('Crafting').className = "SelectionPane";
		document.getElementById('Workers').className = "SelectionPane";
		document.getElementById('Factory').className = "SelectionPane";
		document.getElementById('Travel').className = "SelectionPane";
		document.getElementById('Resources').className = "SelectionPane";
		document.getElementById('Base').className = "SelectionPane";
		
		document.getElementById('GameWindow').className = "Pane-Selected";
		document.getElementById('UpgradesWindow').className = "Pane-Unselected";
		document.getElementById('CraftingWindow').className = "Pane-Unselected";
		document.getElementById('WorkersWindow').className = "Pane-Unselected";
		document.getElementById('FactoryWindow').className = "Pane-Unselected";
		document.getElementById('TravelWindow').className = "Pane-Unselected";
		document.getElementById('ResourcesWindow').className = "Pane-Unselected";
		document.getElementById('BaseWindow').className = "Pane-Unselected";
	};
	
	if (selection == 'UpgradesWindow')
	{
		document.getElementById('Game').className = "SelectionPane";
		document.getElementById('Upgrades').className = "SelectionPane-Selected";
		document.getElementById('Crafting').className = "SelectionPane";
		document.getElementById('Workers').className = "SelectionPane";
		document.getElementById('Factory').className = "SelectionPane";
		document.getElementById('Travel').className = "SelectionPane";
		document.getElementById('Resources').className = "SelectionPane";
		document.getElementById('Base').className = "SelectionPane";
		
		document.getElementById('GameWindow').className = "Pane-Unselected";
		document.getElementById('UpgradesWindow').className = "Pane-Selected";
		document.getElementById('CraftingWindow').className = "Pane-Unselected";
		document.getElementById('WorkersWindow').className = "Pane-Unselected";
		document.getElementById('FactoryWindow').className = "Pane-Unselected";
		document.getElementById('TravelWindow').className = "Pane-Unselected";
		document.getElementById('ResourcesWindow').className = "Pane-Unselected";
		document.getElementById('BaseWindow').className = "Pane-Unselected";
	};
	
	if (selection == 'CraftingWindow')
	{
		document.getElementById('Game').className = "SelectionPane";
		document.getElementById('Upgrades').className = "SelectionPane";
		document.getElementById('Crafting').className = "SelectionPane-Selected";
		document.getElementById('Workers').className = "SelectionPane";
		document.getElementById('Factory').className = "SelectionPane";
		document.getElementById('Travel').className = "SelectionPane";
		document.getElementById('Resources').className = "SelectionPane";
		document.getElementById('Base').className = "SelectionPane";
		
		document.getElementById('GameWindow').className = "Pane-Unselected";
		document.getElementById('UpgradesWindow').className = "Pane-Unselected";
		document.getElementById('CraftingWindow').className = "Pane-Selected";
		document.getElementById('WorkersWindow').className = "Pane-Unselected";
		document.getElementById('FactoryWindow').className = "Pane-Unselected";
		document.getElementById('TravelWindow').className = "Pane-Unselected";
		document.getElementById('ResourcesWindow').className = "Pane-Unselected";
		document.getElementById('BaseWindow').className = "Pane-Unselected";
	};
	
	if (selection == 'WorkersWindow')
	{
		document.getElementById('Game').className = "SelectionPane";
		document.getElementById('Upgrades').className = "SelectionPane";
		document.getElementById('Crafting').className = "SelectionPane";
		document.getElementById('Workers').className = "SelectionPane-Selected";
		document.getElementById('Factory').className = "SelectionPane";
		document.getElementById('Travel').className = "SelectionPane";
		document.getElementById('Resources').className = "SelectionPane";
		document.getElementById('Base').className = "SelectionPane";
		
		document.getElementById('GameWindow').className = "Pane-Unselected";
		document.getElementById('UpgradesWindow').className = "Pane-Unselected";
		document.getElementById('CraftingWindow').className = "Pane-Unselected";
		document.getElementById('WorkersWindow').className = "Pane-Selected";
		document.getElementById('FactoryWindow').className = "Pane-Unselected";
		document.getElementById('TravelWindow').className = "Pane-Unselected";
		document.getElementById('ResourcesWindow').className = "Pane-Unselected";
		document.getElementById('BaseWindow').className = "Pane-Unselected";
	};
	
	if (selection == 'FactoryWindow')
	{
		document.getElementById('Game').className = "SelectionPane";
		document.getElementById('Upgrades').className = "SelectionPane";
		document.getElementById('Crafting').className = "SelectionPane";
		document.getElementById('Workers').className = "SelectionPane";
		document.getElementById('Factory').className = "SelectionPane-Selected";
		document.getElementById('Travel').className = "SelectionPane";
		document.getElementById('Resources').className = "SelectionPane";
		document.getElementById('Base').className = "SelectionPane";
		
		document.getElementById('GameWindow').className = "Pane-Unselected";
		document.getElementById('UpgradesWindow').className = "Pane-Unselected";
		document.getElementById('CraftingWindow').className = "Pane-Unselected";
		document.getElementById('WorkersWindow').className = "Pane-Unselected";
		document.getElementById('FactoryWindow').className = "Pane-Selected";
		document.getElementById('TravelWindow').className = "Pane-Unselected";
		document.getElementById('ResourcesWindow').className = "Pane-Unselected";
		document.getElementById('BaseWindow').className = "Pane-Unselected";
	};
	
	if (selection == 'TravelWindow')
	{
		document.getElementById('Game').className = "SelectionPane";
		document.getElementById('Upgrades').className = "SelectionPane";
		document.getElementById('Crafting').className = "SelectionPane";
		document.getElementById('Workers').className = "SelectionPane";
		document.getElementById('Factory').className = "SelectionPane";
		document.getElementById('Travel').className = "SelectionPane-Selected";
		document.getElementById('Resources').className = "SelectionPane";
		document.getElementById('Base').className = "SelectionPane";
		
		document.getElementById('GameWindow').className = "Pane-Unselected";
		document.getElementById('UpgradesWindow').className = "Pane-Unselected";
		document.getElementById('CraftingWindow').className = "Pane-Unselected";
		document.getElementById('WorkersWindow').className = "Pane-Unselected";
		document.getElementById('FactoryWindow').className = "Pane-Unselected";
		document.getElementById('TravelWindow').className = "Pane-Selected";
		document.getElementById('ResourcesWindow').className = "Pane-Unselected";
		document.getElementById('BaseWindow').className = "Pane-Unselected";
	};
	
	if (selection == 'ResourcesWindow')
	{
		document.getElementById('Game').className = "SelectionPane";
		document.getElementById('Upgrades').className = "SelectionPane";
		document.getElementById('Crafting').className = "SelectionPane";
		document.getElementById('Workers').className = "SelectionPane";
		document.getElementById('Factory').className = "SelectionPane";
		document.getElementById('Travel').className = "SelectionPane";
		document.getElementById('Resources').className = "SelectionPane-Selected";
		document.getElementById('Base').className = "SelectionPane";
		
		document.getElementById('GameWindow').className = "Pane-Unselected";
		document.getElementById('UpgradesWindow').className = "Pane-Unselected";
		document.getElementById('CraftingWindow').className = "Pane-Unselected";
		document.getElementById('WorkersWindow').className = "Pane-Unselected";
		document.getElementById('FactoryWindow').className = "Pane-Unselected";
		document.getElementById('TravelWindow').className = "Pane-Unselected";
		document.getElementById('ResourcesWindow').className = "Pane-Selected";
		document.getElementById('BaseWindow').className = "Pane-Unselected";
	};
	
	if (selection == 'BaseWindow')
	{
		document.getElementById('Game').className = "SelectionPane";
		document.getElementById('Upgrades').className = "SelectionPane";
		document.getElementById('Crafting').className = "SelectionPane";
		document.getElementById('Workers').className = "SelectionPane";
		document.getElementById('Factory').className = "SelectionPane";
		document.getElementById('Travel').className = "SelectionPane";
		document.getElementById('Resources').className = "SelectionPane";
		document.getElementById('Base').className = "SelectionPane-Selected";
		
		document.getElementById('GameWindow').className = "Pane-Unselected";
		document.getElementById('UpgradesWindow').className = "Pane-Unselected";
		document.getElementById('CraftingWindow').className = "Pane-Unselected";
		document.getElementById('WorkersWindow').className = "Pane-Unselected";
		document.getElementById('FactoryWindow').className = "Pane-Unselected";
		document.getElementById('TravelWindow').className = "Pane-Unselected";
		document.getElementById('ResourcesWindow').className = "Pane-Unselected";
		document.getElementById('BaseWindow').className = "Pane-Selected";
	};
};
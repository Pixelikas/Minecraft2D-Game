const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.Flash,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Behaviors.solid,
		C3.Behaviors.Pin,
		C3.Plugins.TiledBg,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Mouse.Exps.AbsoluteX,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Mouse.Exps.AbsoluteY,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Cnds.IsByWall,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Behaviors.Pin.Acts.Pin,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.System.Exps.timescale,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Vida: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{Flash: 0},
	{BoundToLayout: 0},
	{Steve: 0},
	{Fundo: 0},
	{Movimento: 0},
	{Porco: 0},
	{Keyboard: 0},
	{Mouse: 0},
	{x_num: 0},
	{y_num: 0},
	{position_x_set: 0},
	{position_y_set: 0},
	{Solid: 0},
	{Bloco: 0},
	{Ponteiro: 0},
	{Galinha: 0},
	{Aranha: 0},
	{Vida1: 0},
	{Vida2: 0},
	{Vida3: 0},
	{Vida4: 0},
	{Vida5: 0},
	{Coxa: 0},
	{CoxaSlot: 0},
	{Pin: 0},
	{Hitbox: 0},
	{Portal: 0},
	{SpiderEye: 0},
	{Alex: 0},
	{Fundo2: 0},
	{Chão2: 0},
	{Coxa2: 0},
	{Inventário: 0},
	{Item1: 0},
	{Item2: 0},
	{Item3: 0},
	{Item4: 0},
	{Item5: 0},
	{Item6: 0},
	{Item7: 0},
	{Enderman: 0},
	{Slot1: 0},
	{Slot2: 0},
	{Árvore: 0},
	{Bloco2: 0},
	{Chão: 0}
];

self.InstanceType = {
	Steve: class extends self.ISpriteInstance {},
	Fundo: class extends self.ISpriteInstance {},
	Porco: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Bloco: class extends self.ISpriteInstance {},
	Ponteiro: class extends self.ISpriteInstance {},
	Galinha: class extends self.ISpriteInstance {},
	Aranha: class extends self.ISpriteInstance {},
	Vida1: class extends self.ISpriteInstance {},
	Vida2: class extends self.ISpriteInstance {},
	Vida3: class extends self.ISpriteInstance {},
	Vida4: class extends self.ISpriteInstance {},
	Vida5: class extends self.ISpriteInstance {},
	Coxa: class extends self.ISpriteInstance {},
	CoxaSlot: class extends self.ISpriteInstance {},
	Hitbox: class extends self.ISpriteInstance {},
	Portal: class extends self.ISpriteInstance {},
	SpiderEye: class extends self.ISpriteInstance {},
	Alex: class extends self.ISpriteInstance {},
	Fundo2: class extends self.ISpriteInstance {},
	Chão2: class extends self.ISpriteInstance {},
	Coxa2: class extends self.ISpriteInstance {},
	Inventário: class extends self.ISpriteInstance {},
	Item1: class extends self.ISpriteInstance {},
	Item2: class extends self.ISpriteInstance {},
	Item3: class extends self.ISpriteInstance {},
	Item4: class extends self.ISpriteInstance {},
	Item5: class extends self.ISpriteInstance {},
	Item6: class extends self.ISpriteInstance {},
	Item7: class extends self.ISpriteInstance {},
	Enderman: class extends self.ISpriteInstance {},
	Slot1: class extends self.ISpriteInstance {},
	Slot2: class extends self.ISpriteInstance {},
	Árvore: class extends self.ISpriteInstance {},
	Bloco2: class extends self.ISpriteInstance {},
	Chão: class extends self.ITiledBackgroundInstance {}
}
import { track } from '@bigbluebutton/editor'
// import { useBreakpoint } from '../hooks/useBreakpoint'
// import { useReadonly } from '../hooks/useReadonly'

export const MenuZone = track(function MenuZone() {
	// const editor = useEditor()

	// const breakpoint = useBreakpoint()
	// const isReadonly = useReadonly()

	return (
		<div className="tlui-menu-zone">
			<div className="tlui-buttons__horizontal">
				{/* <Menu />
				<PageMenu />
				{breakpoint >= 6 && !isReadonly && !editor.isInAny('hand', 'zoom') && (
					<>
						<UndoButton />
						<RedoButton />
						<TrashButton />
						<DuplicateButton />
						<ActionsMenu />
					</>
				)} */}
			</div>
		</div>
	)
})

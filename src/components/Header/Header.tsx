'use client'

import { useState, useContext } from 'react';
import Image from 'next/image';

import { WindowSizeContext, ModalContext } from '@/LibRoot';
import { MobileMenu, CustomSVG, ClassicButton } from '@/ComponentsRoot';
import { SVGPath } from '@/ConstantsRoot';

import { HeaderSection, LogoSection, HeaderMainSection, TitleSection, Title, ControlsSection, EditBoardControl } from './Header.styled';

const Header = () => {
	const { isMobile } = useContext(WindowSizeContext);
	const { handleOpenModal } = useContext(ModalContext);
	const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);

	return (
		<HeaderSection>
			<LogoSection>
				<Image
					width='25'
					height='25'
					src='/logo-dark.svg'
					alt="logo_icon"
				/>
				<p>kanban</p>
			</LogoSection>
			<HeaderMainSection>
				<TitleSection onClick={() => isMobile && setToggleMobileMenu(!toggleMobileMenu)}>
					<Title>Platform Launch</Title>
					{isMobile &&
						<CustomSVG
							width='10px'
							height='8px'
							path={SVGPath.arrow}
							fill='none'
							stroke='#635FC7'
							strokeWidth="2"
							transform={toggleMobileMenu ? 'rotate(180deg)' : 'none'}
						/>
					}
				</TitleSection>
				<ControlsSection>
					<ClassicButton
						onClick={() => handleOpenModal('AddNewTask')}
					>
						+
						{!isMobile && 'Add New Task'}
					</ClassicButton>
					<EditBoardControl>
						<span></span>
						<span></span>
						<span></span>
					</EditBoardControl>
				</ControlsSection>
			</HeaderMainSection>
			{/* <MobileMenu isShow={toggleMobileMenu} /> */}
		</HeaderSection>
	)
}

export default Header;
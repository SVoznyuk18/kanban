'use client'

import { useState, useContext } from 'react';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';

import { WindowSizeContext, ModalContext } from '@/LibRoot';
import { MobileMenu, CustomSVG, ClassicButton } from '@/ComponentsRoot';
import { SVGPath } from '@/ConstantsRoot';
import { useTypedSelector } from '@/UtilsRoot';

import { HeaderSection, LogoSection, HeaderMainSection, TitleSection, Title, ControlsSection, EditBoardControl } from './Header.styled';

const Header = () => {
	const { isMobile } = useContext(WindowSizeContext);
	const { handleOpenModal } = useContext(ModalContext);
	const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);
	const pathname = usePathname()

	const board = useTypedSelector(state => state?.board?.board);
	const columns = useTypedSelector(state => state?.columns?.columns);

	return (
		<HeaderSection>
			<Link href='/' style={{ textDecoration: 'none' }}>
				<LogoSection>
					<Image
						width='25'
						height='25'
						src='/logo-dark.svg'
						alt="logo_icon"
					/>
					<p>kanban</p>
				</LogoSection>
			</Link>
			<HeaderMainSection>
				<TitleSection onClick={() => isMobile && setToggleMobileMenu(!toggleMobileMenu)}>
					{pathname !== '/' && (<Title>{board?.boardName}</Title>)}
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
						height={isMobile ? "32px" : "48px"}
						variant="default"
						disabled={columns.length < 1 || pathname === '/'}
						onClick={() => handleOpenModal('AddNewTask')}
					>
						+ {!isMobile && 'Add New Task'}
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
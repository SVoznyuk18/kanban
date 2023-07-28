'use client'

import Image from 'next/image';

import { HeaderSection, LogoSection, HeaderMainSection, TitleSection, Title, ControlsSection, ClassicButton, EditBoardControl } from './Header.styled';

const Header = () => {
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
				<TitleSection>
					<Title>Platform Launch</Title>
				</TitleSection>
				<ControlsSection>
					<ClassicButton>
						+ Add New Task
					</ClassicButton>
					<EditBoardControl>
						<span></span>
						<span></span>
						<span></span>
					</EditBoardControl>
				</ControlsSection>
			</HeaderMainSection>
		</HeaderSection>
	)
}

export default Header;